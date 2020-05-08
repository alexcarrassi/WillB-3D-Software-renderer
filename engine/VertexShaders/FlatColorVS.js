function FlatColorVS(renderer) {
  renderer.setVertexShader(this);

  this.color = new Vector3(221, 15, 0);
  this.color.position[3] = 255;

  this.colorsArray = [
    new Vector3(255, 0, 0),
    new Vector3(0, 255, 0),
    new Vector3(0, 0, 255),
  ]

}

FlatColorVS.prototype.newModel = function(newModel) {

}


FlatColorVS.prototype.getVertex = function(vertex_in, camera_inverse) {
  // if(typeof(vertex_in.uv) !== "undefined" ) {
  //   delete vertex_in.uv;
  // }
  //
  // if(typeof(vertex_in.normal) !== "undefined") {
  //   delete vertex_in.normal;
  // }

  vertex_in.color = this.color;
  vertex_in.color = vertex_in.color.multiplyScalar(1/vertex_in.position.position[3]);


  return vertex_in;
}
