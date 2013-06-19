define(['Vertex', 'Scales','T'], function (Vertex, Scales,T) {
  // ==================
  // = Class Triangle =
  // ==================  
  var Triangle = function(a,b,c){
    this.a = a || new Vertex();
    this.b = b || new Vertex();
    this.c = c || new Vertex();
    
    this.vertices = [this.a,this.b,this.c];
    this.centroid = new paper.Point();
    this.color = new  paper.Color({hue:scales.randomInRange(190,220),saturation:1,brightness:1})
    
    this.polygon = new  paper.Path(this.vertices);
    this.polygon.closed = true;
    this.polygon.style.fillColor = this.color
    this.polygon.style.strokeColor =  this.color;
    this.polygon.style.strokeWidth = 2;
    this.polygon.style.strokeJoin = 'round'
    
    this.computeCentroid();
    
    return this;
  
  }
  Triangle.prototype = {
    
    setColor : function(color){
      this.color = color || new paper.Color();
      this.polygon.style.fillColor = this.color;
      this.polygon.style.strokeColor = this.color;
    },
    
    computeCentroid: function (){
      this.centroid.x = (this.a.x + this.b.x + this.c.x)/3;
      this.centroid.y = (this.a.y + this.b.y + this.c.y)/3;
    },
    colorVariation: function (seed){
      var angle = (this.color.brightness)%360;
      var reduced = T.sin(angle);
      var transformed = reduced*0.03/4;
      //this.color.brightness += transformed
     }
    
  }
  return Triangle;
})