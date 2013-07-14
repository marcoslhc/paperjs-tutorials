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
require(['main', 'Block'],function (main, Block) {
    var str = "abcdef"
    var length = str.length;
    var textBlock = [];
    for(var i=0;i<length;i++){
        textBlock.push(new Block(str[i],[2,2],100));
        textBlock[i].init();
    }
})