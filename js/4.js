var a = new Point(50,50);
var b = new Point(110,200);
var start = new Path.Circle({center:a,radius:5});
var end = new Path.Circle({center:b,radius:5});
cicleStyles = {
  strokeColor:'lightblue',
  dashArray:[1,1],
  strokeWidth:1,
  strokeCap:'round'
};
start.style = cicleStyles;
end.style = cicleStyles;
var vektor = new Path(a,b);
vektor.style = {
  strokeColor:'grey',
  dashArray:[3,5],
  strokeWidth:3,
  strokeCap:'round'
}