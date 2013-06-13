requirejs.config({
  baseUrl:"/js/",
  urlArgs:"bust="+(new Date()).getTime(),
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