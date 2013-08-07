var Timers = {

interval: function(func, time, obj, args) {
    var r;
    var a = args ? args : [];
    var o = obj ? obj : null;
    var ifunc = function() {
        if(r === false) {
            return;
        }
        if(r !== undefined) {
            r = func.apply(o, [r].concat(a));
        } else {
            r = func.apply(o, a);
        }
        setTimeout(ifunc, time)
    ifunc();
},

timeout: function(func, time, obj, args) {
    var o = obj ? obj : null;
    if(args) {
        setTimeout(function() {
            func.apply(o, args);
        }, time);
    } else {
        setTimeout(function() {
            func.apply(o);
        }, time);
    }
}

};