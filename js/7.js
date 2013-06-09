//var points = []
//points.push((j*x)+i)
//points.push((j*x)+(i+1))
//points.push(((j+1)*x)+i)
//console.log("i: "+i+",j: "+j+",x: "+x+", "+points)
//return points

//points.push((j*x)+i);
//if(!(i%2===0)){
//    points.push((j*x)+i+1);
//    points.push(((j+1)*x)+i+1);
//    console.log("odd: "+i%2+"; "+points)
//    return points;
//}
//points.push(((j+1)*x)+i+1);
//points.push(((j+1)*x)+i);
//console.log("even: "+i%2+"; "+points)
////console.log(i+", "+j+"; "+points)
//return points;


var DISTANCE = 100
var x = ~~((view.viewSize.width+100)/100), y = ~~((view.viewSize.height+100)/100);
//var x = 3; var y=3;
//console.log(x,y);

var colors = [
  new Color({hue: 222,  saturation:  0.74, brightness:  0.54}),
  new Color({hue: 235,  saturation:  0.10, brightness:  0.87}),
  new Color({hue:   4,  saturation:  0.75, brightness:  0.91}),
  new Color({hue:  30,  saturation:  0, brightness:  1 })
];

var generatePoints = function(){
  var points = []
  for(var j = 0; j<=y;j++){
//    var cells = []
    for( var i=0;i<=x;i++){
      points.push(new Point(i*DISTANCE,j*DISTANCE));
      //console.log(set3anPoints(i,j));
    }
//    points.push(cells);
  }
  return points;
}

var create3An = function(mat,points,style){
  //console.log("mat["+points[0]+"]: "+mat[points[0]]+", mat["+points[1]+"]: "+mat[points[1]]+", mat["+points[2]+"]: "+mat[points[2]])
  var mod1 = new Path(mat[points[0]],mat[points[1]],mat[points[2]]);
  mod1.closed = true;
  mod1.style = style;
  //mod1.selected=true;
  return mod1;
}
var createStyle = function(){
  var hue;
  var style;
  hue = ~~(Math.random()*45)
  return {
    fillColor: new Color({hue: hue,saturation:1,lightness:.5})
  }
}
function darken(){
  
}
function desaturate(){
  
}
function saturate(){
  
}
function spin(){
  
}
var createModule = function(threePoints1,threePoints2){
  //var style1={},style2={};
  //style1.fillColor = colors[~~(Math.random()*4)]
  //style2.fillColor = colors[~~(Math.random()*4)] 
      console.log(threePoints1,threePoints2)
  if(threePoints1.reduce(function(a,b){return a+b})>=0&&threePoints2.reduce(function(a,b){return a+b})>0){
    return new Group(
    create3An(matrix,threePoints1,createStyle()),
    create3An(matrix,threePoints2,createStyle())
    );
  }  
}

var set3anPoints = function(i,j,x,orientation){
  var points = [];
  var tcx = x +1;
  //console.log(orientation)
  var p0 = 0;
  var p1 = 0;
  var p2 = 0;
  var p3 = 0;
    p0 = ((x + 1) * j) + i;
    p1 = p0 + 1;
    p2 = p0 + tcx;
    p3 = p0 + tcx + 1
    if(orientation){
      return [p1,p3,p2]
    }else{
      return [p0,p1,p2]
    }  
}

var init = function(){
  for(var j = 0; j < y; j=j+1){
    for( var i = 0; i < x; i=i+1){
      //console.log((x+1)*(j+1)+i)
      if((x+1)*(j+1)+i>=matrix.length) break;
      //console.log(matrix)
      //console.log([i,j])
      var points1 =[], points2 = []
      points1 = set3anPoints(i,j,x,0);
      points2 = set3anPoints(i,j,x,1);
      var mod = createModule(points1,points2);
    }
  }
  //matrix.forEach(function(elm,idx,arr){
  //  var num = new PointText(elm);
  //  num.fillColor = 'black';
  //  num.content = (idx)
  //})
  //matrix.forEach(function(elm,idx,arr){
  //  elm.forEach(function(elm2,idx2,arr2){
  //    var num = new PointText(elm2)
  //    num.fillColor = 'black'
  //    num.content =(arr2.length*idx)+idx2;
  //  })
  //});  
}

var matrix = generatePoints();
init();