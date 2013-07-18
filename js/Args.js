define(function () {
    var Args = function () {}
    var errorMessages = {
        "TypeError":"Tipo incorrecto"
    }
    Args.type = function (o) {
        return !!o && Object.prototype.toString.call(o).match(/(\w+)\s(\w+)/)[2];
    }
    Args.process = function(arg,type,cb){
        if(Args.type(arg) === type) {
            return cb(arg);
        }else{
            throw new TypeError(errorMessages["TypeError"])
        }
    }
    return Args;
})