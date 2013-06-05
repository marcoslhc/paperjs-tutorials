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
//var x = ~~((view.viewSize.width+100)/100), y = ~~((view.viewSize.height+100)/100);
var x = 10; var y=10
console.log(x,y);

var generatePoints = function(){
  var points = []
  for(var j = 0; j<=y;j++){
    for( var i=0;i<=x;i++){
      points.push(new Point(i*DISTANCE,j*DISTANCE));
      //console.log(set3anPoints(i,j));
    }
  }
  return points;
}

var create3An = function(mat,points,style){
  console.log("mat["+points[0]+"]: "+mat[points[0]]+", mat["+points[1]+"]"+mat[points[1]]+", mat["+points[2]+"]"+mat[points[2]])
  var mod1 = new Path(mat[points[0]],mat[points[1]],mat[points[2]]);
  mod1.closed = true;
  mod1.style = style;
  //mod1.selected=true;
  return mod1;
}
var createModule = function(threePoints1,threePoints2){
  var style1={},style2={};
  style1.fillColor = new Color({
    hue:Math.random()*360,saturation:1,brightness:1
  });
  style2.fillColor = new Color({
    hue:Math.random()*360,saturation:1,brightness:1
  });
  return new Group(
  create3An(matrix,threePoints1,style1),
  create3An(matrix,threePoints2,style2)
  );
}
var set3anPoints = function(i,j,x,orientation){
  var points = [];
  points.push((x*j)+i);
  points.push(orientation?(x*j)+i+1:(x*(j+1))+i+1);
  points.push((x*(j+1))+i);
  return points;
  
}

var init = function(){
  for(var j = -1; j<y+1;j++){
    for( var i=-1;i<x+1;i++){
      var color1 =new Color({
        hue: Math.random()*360,  
        saturation:  1, 
        brightness:  1
      });
      var style1 = {
        fillColor: color1
      }
      //console.log(matrix)
      //console.log([i,j])
      var mod = createModule(set3anPoints(i,j,x,0),set3anPoints(i,j,x,1));
    }
  }
  matrix.forEach(function(elm,idx,arr){
    var num = new PointText(elm)
    num.fillColor = 'black'
    num.content =idx;
  });  
}

var matrix = generatePoints();
init();