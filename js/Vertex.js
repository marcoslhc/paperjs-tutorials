
define(['Scales'],function (scales) {
  // ================
  // = Class Vertex =
  // ================
  var Vertex = function(x,y){
    paper.Point.call(this,x,y);
    Vertex.prototype = new paper.Point();
    Vertex.prototype.constructor = Vertex;
    this.anchor = new paper.Point(this.x,this.y)
    this.time = scales.randomInRange(0,Math.PI*2);
    this.step = new paper.Point(
      scales.randomInRange(0.2,1),
      scales.randomInRange(0.2,1)
    );
  }
  return Vertex;
})
