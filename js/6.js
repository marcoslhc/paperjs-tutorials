var DISTANCE = 100;
var COLOR = {hue:300,saturation:0,brightness:0}
var model = new Path.Circle(new Point(0,0),5);
model.style = {
  fillColor:COLOR
};
var sym = new Symbol(model);
model.remove();
var module1 = function (p1,p2,p3,style1){
  var mod1 = new Path(p1,p2,p3);
  mod1.closed = true;
  mod1.style = style1;
  //mod1.selected = true;
  return mod1;
}
var colors = [
  new Color({hue: 222,  saturation:  0.74, brightness:  0.54}),
  new Color({hue: 235,  saturation:  0.10, brightness:  0.87}),
  new Color({hue:   4,  saturation:  0.75, brightness:  0.91})//,
  //new Color({hue:  30,  saturation:  0, brightness:  1 })
];
function generatePoints(distance){
  var points = [];
  var triangles = [];
  var matrix = view.size/distance;
  var x =~~matrix.width, y=~~matrix.height
  //var x = 4; var y = 4;
  for(var j=0;j<x;j++){
    for(var i=0;i<y;i++){
      var point = new Point(i*distance,j*distance);
      var color1 =new Color({hue: Math.random()*360,  saturation:  0.74, brightness:  0.54});
      var style1 = {
        fillColor: color1
      }
      point_number = getPoints(i,j,x,y);
      console.log("Points Gen:"+[i,j,point_number[0],point_number[1],point_number[2]]);
      if(point_number&&point_number[0]&&point_number[1]&&point_number[2]){
        var triangle = module1(points[point_number[0]],points[point_number[1]],points[point_number[2]],style1)
        //console.log(triangle.segments);
      }
      points.push(point);
    }
  }
  return points;
}

function getPoints(i,j,modulox,moduloy){
  if(j<=moduloy){
    var p1 = (j*modulox)+i;
    var p2 = 0, p3 = 0;
    if(i%2){
      p2 = p1-1;
      p3 = p2-(modulox-1);
      return [p1,p2,p3]
    }
    p2 = p1-modulox;
    p3 = p2+1;
    if(p1>=0&&p2>=0&&p3>=0){
      console.log("Points rescued: "+[p1,p2,p3])
      return [p1,p2,p3];
    }
  }
  return false
}

function onResize(event){
  var pointMatrix = generatePoints(DISTANCE);
  
  for(var i=0;i<pointMatrix.length;i++){
    var num = new PointText(pointMatrix[i]);
    num.fillColor = 'black'
    num.content = i+''
  }
  //var number = this.viewSize / DISTANCE;
  //var obj = [];
  //for(var i = 0; i<=number.width; i++){
  //  var col = []
  //  for(var j=0; j<=number.height; j++){
  //    col.push(sym.place(new Point(i*DISTANCE,j*DISTANCE)));
  //  }
  //  pointMatrix.push(col);
  //}
}
onResize();
function onMouseMove(event){
  
}