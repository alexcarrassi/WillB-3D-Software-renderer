function TextureVS(renderer) {
  renderer.setVertexShader(this);
}

TextureVS.prototype.newModel = function(newModel) {

}


TextureVS.prototype.getVertex = function(vertex_in, camera_inverse) {

  //Perspective correction
  vertex_in.position = camera_inverse.multMatrixVec3(vertex_in.position);

  vertex_in.uv = vertex_in.uv.divideScalar(vertex_in.position.position[2]);

  return vertex_in;
}
