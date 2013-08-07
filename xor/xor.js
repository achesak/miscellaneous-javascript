Boolean.xor = function() {
    var r = false;
    for (var i = 0; i < arguments.length; i++) {
       r = arguments[i] || r ? (arguments[i] && r ? false : true) : false;
    }
    return r;
};