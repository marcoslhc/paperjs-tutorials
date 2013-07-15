define(['Geometry','Triangle','Scales','Vertex'], function(Geometry, Triangle, scale, Vertex){
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
	this.modules.push(t0,t1);
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
    var triangle, maxTriangles = this.modules.length;
    for (x = 0; x < maxTriangles; x++) {
      triangle = this.modules[x];
    
      ox0 = Math.sin(triangle.a.time+triangle.a.step.x * now * MESH.speed);
      oy0 = Math.cos(triangle.a.time+triangle.a.step.y * now * MESH.speed);
      ox1 = Math.sin(triangle.b.time+triangle.b.step.x * now * MESH.speed);
      oy1 = Math.cos(triangle.b.time+triangle.b.step.y * now * MESH.speed);
      ox2 = Math.sin(triangle.c.time+triangle.c.step.x * now * MESH.speed);
      oy2 = Math.cos(triangle.c.time+triangle.c.step.y * now * MESH.speed);


      triangle.polygon.segments[0].point = [MESH.xRange*ox0,MESH.yRange*oy0];
      triangle.polygon.segments[1].point = [MESH.xRange*ox1,MESH.yRange*oy1];
      triangle.polygon.segments[2].point = [MESH.xRange*ox2,MESH.yRange*oy2];
    
      triangle.polygon.segments[0].point = triangle.polygon.segments[0].point.add(triangle.a.anchor);
      triangle.polygon.segments[1].point = triangle.polygon.segments[1].point.add(triangle.b.anchor);
      triangle.polygon.segments[2].point = triangle.polygon.segments[2].point.add(triangle.c.anchor);

      triangle.computeCentroid()

      triangle.setColor(new paper.Color({hue:scale.transformSymetric(x*oy0,[0,maxTriangles],[190,210]),saturation:.5,lightness:scale.transform(x*oy0,[0,maxTriangles],[.5,1])}))
    
    }
  }
  return Plane;
})