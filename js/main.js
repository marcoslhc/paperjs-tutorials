//
//  9.js
//  paperjs-tutorials
//  attempt to porting the flat shader to paperjs
//  http://wagerfield.github.io/flat-surface-shader/
//  Created by Marcos Hernández on 2013-06-12.
//  Copyright 2013 Marcos Hernández. All rights reserved.
//
require(['paper','Plane'],function(s,Plane){
  var canvas = document.getElementById('tutorial')
  paper.setup(canvas);
  var geometry = new Plane();
  var now, start = Date.now();
  paper.view.draw();
  paper.view.onFrame = function(){
    now = Date.now() - start;
    geometry.update(now);

  }
});
