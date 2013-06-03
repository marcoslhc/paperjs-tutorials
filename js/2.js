var path = new Path.Circle({
    center:view.center,
    radius:30,
    strokeColor:'red'
});
function onResize(event){
    path.position = view.center;
}