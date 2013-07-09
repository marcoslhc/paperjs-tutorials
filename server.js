var express = require('express');
var app = express();
var config = {
  port:8000
}
app.use(express.static(__dirname));
app.get(function (err,req,res,next) {
  if(err){
    console.log(err);
  }else{
    console.log("request "+req.path+" from "+req.ip);
  }
  next();
})
app.listen(config.port);
console.log('listening on port:', config.port)
