// 
//  9.js
//  paperjs-tutorials
//  attempt to porting the flat shader to paperjs
//  http://wagerfield.github.io/flat-surface-shader/ 
//  Created by Marcos Hernández on 2013-06-12.
//  Copyright 2013 Marcos Hernández. All rights reserved.
// 

var MESH = {
  speed : 0.001,
  xRange: 16,
  yRange:18,
  xSegments:16,
  ySegments:9
}
Math.PIM2 = Math.PI*2
Math.PID2 = Math.PI/2

window.onload = function(){
  var canvas = document.getElementById('tutorial')
  paper.setup(canvas);
  var geometry = new init();
  var now, start = Date.now();
  
  
  paper.view.draw();
  paper.view.onFrame = function(){
    now = Date.now() - start;
    geometry.update(now);
    
  }

  function mouseMove(){
  
  }  
}
