
define(function () {
  // ================
  // = Class Vertex =
  // ================
  var Vertex = function(x,y){
    paper.Point.call(this,x,y);
    this.anchor = new paper.Point(this.x,this.y)
    this.time = util.randomInRange(0,Math.PIM2);
    this.step = new paper.Point(
      util.randomInRange(0.2,1),
      util.randomInRange(0.2,1)
    );
  }
  return Vertex;
})
