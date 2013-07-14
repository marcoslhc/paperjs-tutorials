define(["paper"], function (){
  // ==================
  // = Class Geometry =
  // ==================
  var Geometry = function() {
    this.vertices = [];
    this.modules = [];
    Geometry.prototype._parent = paper.project;
  }
  
  return Geometry;
});