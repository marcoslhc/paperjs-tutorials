// 
//  9.js
//  paperjs-tutorials
//  attempt to porting the flat shader to paperjs
//  http://wagerfield.github.io/flat-surface-shader/ 
//  Created by Marcos Hernández on 2013-06-12.
//  Copyright 2013 Marcos Hernández. All rights reserved.
// 
require(['paper','Plane2','Block'],function(s,Plane, Block){
  var canvas = document.getElementById('tutorial')
  paper.setup(canvas);
  ///*
  var geometry = new Plane();
  var now, start = Date.now();
  console.log(geometry);
  geometry.init()
  //*/
  /*
   var str = "k"
   var length = str.length;
   var textBlock = [];
   for(var i=0;i<length;i++){
       textBlock.push(new Block(str[i],[2,2],100));
       textBlock[i].init();
   }
   //*/
  /*
  paper.view.onFrame = function(){
      now = Date.now() - start;
      geometry.update(now);
      
  }
  //*/
  paper.view.onResize = function(){
    if(!geometry){
      geometry = new Plane();
      return geometry.init();
    }
    geometry.render();
  }
  paper.view.draw();
  
  
});

