requirejs.config({
  baseUrl:"/js/",
  urlArgs:"bust="+(new Date()).getTime(),
  paths:{
    'paper':'paperjs-nightly/lib/paper',
    'jquery':'http://code.jquery.com/jquery-1.10.1.min'
  },
  shim:{
    'paper':{
      exports: 'paper'
    },
    'jquery':{
        exports:'jquery'
    }
  }
});
require(['main'],function (main) {
    
})