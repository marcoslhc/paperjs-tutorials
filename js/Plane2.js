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
    var x,y,v0,v1,v2,v3,t0,t1;
    for(x = 0; x<this.xSegments;x++){
      for(y=0;y<this.ySegments;y++){
        v0 = this.vertices[x+0][y+0];
        v1 = this.vertices[x+0][y+1];
        v2 = this.vertices[x+1][y+0];
        v3 = this.vertices[x+1][y+1];
        t0 = new Triangle(v0,v1,v2);
        t1 = new Triangle(v2,v1,v3);
        this.triangles.push(t0,t1);
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