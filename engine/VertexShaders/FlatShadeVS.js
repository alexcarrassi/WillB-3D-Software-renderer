function FlatShadeVS() {
  this.lightDirection = new Vector3(0,0,1);
  this.diffuse = new Vector3(1,1,1);
  this.ambient = new Vector3(0.0, 0.1, 0.1);
  this.color = new Vector3(0.7, 0.85, 0.9);
  this.rot = new Transformation();
}

FlatShadeVS.prototype.newModel = function(newModel) {

}

FlatShadeVS.prototype.rotateLightDirection = function() {
  if(playerState.input.i === true) {
    this.rot.fields = this.rot.rotate(0, 0, 0.025);
  }
  if(playerState.input.j === true) {
    this.rot.fields = this.rot.rotate(-0.025, 0 , 0);
  }
  if(playerState.input.k === true) {
    this.rot.fields = this.rot.rotate(0, 0, -0.025);
  }
  if(playerState.input.l === true) {
    this.rot.fields = this.rot.rotate(0.025, 0, 0 );
  }
  if(playerState.input.u === true) {
    this.rot.fields = this.rot.rotate(0, 0.025, 0 );
  }
  if(playerState.input.o === true) {
    this.rot.fields = this.rot.rotate(0, -0.025, 0 );
  }

  this.lightDirection = this.rot.multMatrixVec3(this.lightDirection).normalize();
  this.rot = new Transformation();
}

FlatShadeVS.prototype.getVertex = function(vertex_in) {

  this.rotateLightDirection();

  var d =  this.diffuse.multiplyScalar(Math.max(0, -this.lightDirection.dot(vertex_in.normal)));
  //console.log(-this.lightDirection.dot(vertex_in.normal));
  if(this.lightDirection.dot(vertex_in.normal) === 0) {
    //console.log(this.lightDirection.position[0] + " " + this.lightDirection.position[1] + " " + this.lightDirection.position[2])

    //console.log(vertex_in.normal.position[0] + " " + vertex_in.normal.position[1] + " " + vertex_in.normal.position[2]);
  }

  var color = this.color.multiplyVector(d.addVector(this.ambient)).multiplyScalar(255);

  vertex_in.color = color;
  return vertex_in;
}
