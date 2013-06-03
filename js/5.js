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
var obj = [];
for(var i = 0; i<=100; i++){
  var style1 = {
    fillColor: {hue:i*10,saturation:1,brightness:1}
  }
  var style2 = {
    fillColor: {hue:100-(i*10),saturation:1,brightness:1}
  }
  var g1 = new module1(30,30,style1,style2)
  g1.position.x += 30*i;
  obj.push(g1);
  console.log(obj[i])
}