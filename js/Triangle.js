define(['Vertex', 'Scales','T','paper'], function (Vertex, Scales,T,s) {
  // ==================
  // = Class Triangle =
  // ==================  
  var colors = [
    new paper.Color({hue: 222,  saturation:  0.74, brightness:  0.54}),
    //new paper.Color({hue: 235,  saturation:  0.10, brightness:  0.87}),
    new paper.Color({hue:   4,  saturation:  0.75, brightness:  0.91}),
    new paper.Color({hue:  30,  saturation:  0, brightness:  1 })
  ];
  var Triangle = function(a,b,c){
    this.a = a || new Vertex();
    this.b = b || new Vertex();
    this.c = c || new Vertex();
    
    this.vertices = [this.a,this.b,this.c];
    this.centroid = new paper.Point();
    this.color = colors[~~(Math.random()*3)]
    this.polygon = new  paper.Path(this.vertices);
    this.polygon.closed = true;
    this.polygon.selected = false;
    this.polygon.style.fillColor = this.color
    this.polygon.style.strokeColor =  this.color;
    this.polygon.style.strokeWidth = 1;
    this.polygon.style.strokeJoin = 'round';
    
    this.computeCentroid();
    
    return this;
  
  }

    
    Triangle.prototype.setColor = function(color){
      this.color = color || new paper.Color();
      this.polygon.style.fillColor = this.color;
      this.polygon.style.strokeColor = this.color;
    },
    
    Triangle.prototype.computeCentroid= function (){
      this.centroid.x = (this.a.x + this.b.x + this.c.x)/3;
      this.centroid.y = (this.a.y + this.b.y + this.c.y)/3;
    },
   Triangle.prototype.colorVariation= function (seed){
      var angle = (this.color.brightness)%360;
      var reduced = T.sin(angle);
      var transformed = reduced*0.03/4;
      //this.color.brightness += transformed
     }
    
  return Triangle;
})