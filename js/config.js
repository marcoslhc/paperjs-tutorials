requirejs.config({
  baseUrl:"/js/",
  paths:{
    'paper':'paperjs-nightly/lib/paper'
  },
  shim:{
    'paper':{
      exports: 'paper'
    }
  }
});
require(['main'],function (main) {
  
})