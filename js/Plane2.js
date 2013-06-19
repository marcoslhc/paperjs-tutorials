define(['Geometry','Triangle','Scales','Vertex','T'], function(Geometry, Triangle, Scales, Vertex,T){
  var MESH = {
    speed : 0.001,
    xRange: 16,
    yRange:18,
    xSegments:16,
    ySegments:9
  };
  var Plane = function (xSegments, ySegments) {
   //Inherits from Geometry 
    Geometry.call(this);
    this.prototype = new Geometry();
    this.prototype.constructor = Geometry;
    this.size = paper.view.viewSize || new paper.Size({
      width: 1024,
      height: 576
    });
    this.xSegments = xSegments || MESH.xSegments;
    this.ySegments = ySegments || MESH.ySegments;
    this.segmentSize = new paper.Size({
      width: this.size.width / this.xSegments,
      height: this.size.height / this.ySegments
    });
    this.makeMesh();
    this.renderTriangles();
  
  }
  Plane.prototype.renderTriangles = function (){
    var x,y,v0,v1,v2,v3,vc,t0,t1,t2,t3;
    
    var CalcSize = function(){
      var sizeIdx, sizes = [1, 2, 3, 5, 8];
      sizeIdx = ~~(Math.random()*(sizes.length));
      return sizes[sizeIdx];
    }
    console.log(this.xSegments,this.ySegments)
    for(x = 0; x < this.xSegments; x++){
      for(y = 0; y < this.ySegments; y++){
        
        size = CalcSize();
                
        if( x + size > this.xSegments || y + size > this.ySegments ){
          size = Math.min(this.xSegments - x,this.ySegments-y);
        }
        
        v0 = this.vertices[x+0][y+0];
        v1 = this.vertices[x+0][y+size];
        v2 = this.vertices[x+size][y+0];
        v3 = this.vertices[x+size][y+size];
        var rect = new paper.Rectangle(v0,v3);
        vc = rect.center;
        t0 = new Triangle(v0,v2,vc);
        t1 = new Triangle(v2,v3,vc);
        t2 = new Triangle(v3,v1,vc);
        t3 = new Triangle(v1,v0,vc);
        this.triangles.push(t0,t1,t2,t3);
      }
    }
  }

  Plane.prototype.makeMesh = function(offsetX,offsetY){
    var x,y,vertex;
    offsetX = offsetX||0;
    offsetY = offsetY||0;
    for (x = 0; x <= this.xSegments; x++) {
      this.vertices.push([]);
      for (y = 0; y <= this.ySegments; y++) {
        vertex = new Vertex(
        offsetX + x * this.segmentSize.width,
        offsetY + y * this.segmentSize.height);
        this.vertices[x].push(vertex);
        //this.vertices.push(vertex);
      }
    }
  }
  Plane.prototype.update = function(now){

  }
  return Plane;
})