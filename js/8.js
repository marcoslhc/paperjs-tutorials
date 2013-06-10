// 
//  8.js
//  paperjs-tutorials
//  attempt to porting the flat shader to paperjs
//  http://wagerfield.github.io/flat-surface-shader/ 
//  Created by Marcos Hernández on 2013-06-09.
//  Copyright 2013 Marcos Hernández. All rights reserved.
// 

var MESH = {
  speed : 0.0006,
  xRange: 8,
  yRange:9,
  xSegments:16,
  ySegments:9
}

var util = (function() {
  'use strict';
  return {
    scaleVal: function(value_from, min, max) {
      /*
      scaleVal(value,max,min)
      scaleVal(value,max)
      scaleVal(value)
    
      Given a value, returns the relative position in a range between 2 other
      numbers. If the min value is omited, then the range starts in 0. If both
      min and max are ommited, then the scale ranges from 0 to 1
    
      @param Number value
      @param Number min
      @param Number min

      @returns Number
    */
      if (typeof max === 'undefined') {
        if (typeof max === 'undefined') {
          max = 1;
        } else {
          max = min;
        }
        min = 0;
      }
      return (value_from - min) / (max - min);
    },

    normalizeVal: function(value, mid_point, range) {
      /*
      normalizeVal(value,mid_point,range)
      
    */
      return (value - mid_point) / range;
    },

    calcOffset: function(value_from, min, max) {
      if (typeof max === 'undefined') {
        max = min;
        min = 0;
      }
      return (value_from * (max - min)) + min;
    },

    clamp: function(value, min, max) {
      /*
        clamp(value,min,max)
        @param Number value
        @param Number min
        @param Number max

        @returns Number 

        taken from github.com/wagerfield/flat-surface-shader/blob/bb292d0001ed59beee5dc9dcebc1f17dedd13b13/source/Math.js
      */
      value = Math.max(value, min);
      value = Math.min(value, max);
      return value;

    },

    range: function(min, max) {
      return max - min;
    },

    mean: function(values) {
      var total = 0;
      for (var i = 0; i < values.length; i++) {
        total += values[i];
      }
      return total / values.length;
    },

    transform: function(value_from, scale1, scale2) {
      /*
      transform(value_from, scale1, scale2)
      @param Number value_from
      @param [Number] scale1
      @param [Number] scale2
    
      @returns Number
    */
      return this.calcOffset(this.scaleVal(value_from, scale1[0], scale1[1]), scale2[0], scale2[1]);

    },
    transformSymetric: function(value_from, scale1, scale2) {
      /*
      transformSymetric(value_from, scale1, scale2)
      @param Number value_from
      @param [Number] scale1
      @param [Number] scale2
    
      @returns Number
    */
      var mid_point = 0,
        range = 0,
        new_value = 0;
      mid_point = this.mean(scale1);
      range = this.range(scale1[1], scale1[0]);
      new_value = Math.abs(this.normalizeVal(value_from, mid_point, range)) * 2;

      return this.calcOffset(new_value, scale2[0], scale2[1]);
    }
  }
})()

var init = (function () {
  
// ==================
// = Class Geometry =
// ==================
  var Geometry = function() {
    this.vertices = [];
    this.triangles = [];
  }
  
// ===============
// = Extend Math =
// ===============
Math.PIM2 = Math.PI*2
Math.PID2 = Math.PI/2
Math.randomInRange = function(min, max){
  return min+(max-min)*Math.random();
}
Math.clamp = function(value, min, max){
  value = Math.max(value,min);
  value = Math.min(value,max);
  return value;
}  
  
// ================
// = Class Vertex =
// ================
var Vertex = function(x,y){
  Point.call(this,x,y);
  this.anchor = new Point(this.x,this.y)
  this.time = Math.randomInRange(0,Math.PIM2);
  this.step = new Point(
    Math.randomInRange(0.2,1),
    Math.randomInRange(0.2,1)
  );
}
// ==================
// = Class Triangle =
// ==================  
  var Triangle = function(a,b,c){
    this.a = a || new Vertex();
    this.b = b || new Vertex();
    this.c = c || new Vertex();
    this.vertices = [this.a,this.b,this.c];
    this.color = new Color({hue:Math.randomInRange(190,220),saturation:1,brightness:1})
    this.polygon = new Path(this.vertices);
    this.polygon.closed = true;
    this.polygon.style.fillColor = this.color
    this.polygon.style.strokeColor =  this.color;
    this.polygon.style.strokeWidth = 2;
    this.polygon.style.strokeJoin = 'round'
    //this.polygon.selected = true;
    return this;
  }
  Triangle.prototype = {
    setColor : function(color){
      color = color || new Color();
      this.polygon.style.fillColor = color;
      this.polygon.style.strokeColor = color;
    }
  }

// ===============
// = Class Plane =
// ===============
  var Plane = function(xSegments, ySegments) {
   //Inherits from Geometry 
    Geometry.call(this);
    this.size = view.viewSize || new Size({
      width: 1024,
      height: 576
    });
    this.xSegments = xSegments || MESH.xSegments;
    this.ySegments = ySegments || MESH.xSegments;
    this.segmentSize = new Size({
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
  Plane.prototype.update = function(){
    var triangle;
    for (x = 0; x < this.triangles.length; x++) {
      triangle = this.triangles[x];
      
      ox0 = Math.sin(triangle.a.time+triangle.a.step.x * now * MESH.speed);
      oy0 = Math.cos(triangle.a.time+triangle.a.step.y * now * MESH.speed);
      ox1 = Math.sin(triangle.b.time+triangle.b.step.x * now * MESH.speed);
      oy1 = Math.cos(triangle.b.time+triangle.b.step.y * now * MESH.speed);
      ox2 = Math.sin(triangle.c.time+triangle.c.step.x * now * MESH.speed);
      oy2 = Math.cos(triangle.c.time+triangle.c.step.y * now * MESH.speed);
      
      triangle.polygon.segments[0].point = [MESH.xRange*ox0,MESH.yRange*oy0];
      triangle.polygon.segments[1].point = [MESH.xRange*ox1,MESH.yRange*oy1];
      triangle.polygon.segments[2].point = [MESH.xRange*ox2,MESH.yRange*oy2];
      triangle.polygon.segments[0].point += triangle.a.anchor;
      triangle.polygon.segments[1].point += triangle.b.anchor;
      triangle.polygon.segments[2].point += triangle.c.anchor;
      
    }
  }
  return Plane;
})()

var geometry = new init();
var now, start = Date.now();

function onFrame(){
  now = Date.now() - start;
  geometry.update();
}
