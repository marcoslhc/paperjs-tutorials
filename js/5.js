var module1 = function (w,h,style1,style2){
  var a = new Point(0,0);
  var b = new Point(w,0);
  var c = new Point(0,h);
  var d = new Point(w,h);
  var mod1 = new Path(a,b,c);
  mod1.closed = true;
  mod1.style = style1;
  var mod2 = new Path(b,c,d);
  mod2.closed = true;
  mod2.style = style2;
  return new Group([mod1,mod2])
}
var colors = [
  new Color({hue: 222,  saturation:  0.74, brightness:  0.54}),
  new Color({hue: 235,  saturation:  0.10, brightness:  0.87}),
  new Color({hue:   4,  saturation:  0.75, brightness:  0.91}),
  new Color({hue:  30,  saturation:  0, brightness:  1 })
]
function onResize(event){
  
  var size = this.viewSize / 100;
  var obj = [];
  for(var i = 0; i<=size.width; i++){
    for(var j=0; j<=size.height; j++){
      var color1 = Math.floor(Math.random()*4);
      var color2 = Math.floor(Math.random()*4);
      console.log([color1,color2])
      var style1 = {
        fillColor: colors[color1]
      }
      var style2 = {
        fillColor: colors[color2]
      }
      var g1 = new module1(100,100,style1,style2)
      if(i%2===1&&j%2===0){
        g1.scale(-1,1);
      }else if(i%2===0&&j%2==1){
        g1.scale(1,-1);
      }
      g1.position += [100*i,100*j];
      obj.push(g1);    }
  }
}