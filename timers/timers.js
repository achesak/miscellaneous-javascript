var Timers = {

/*
 * Timers.interval(func, time, obj, args)
 * 
 * ARGUMENTS:
 * func - function to be executed on every interval.
 * time - positive number specifying the interval time.
 * obj - optional object that the function will be called as a method of. If not
 *       specified the function is called as a method of null.
 * args - optional array of arguments to pass the function.
 * 
 * RETURNS:
 * [none]
 * 
 * NOTES:
 * The return value of the function will be remembered, as passed as the first argument
 * next time it is executed (unless the return value is undefined, in which case it will not 
 * be passed). Returning false from the function will cancel the timer.
 */
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

/*
 * Timers.timeout(func, time, obj, args)
 * 
 * ARGUMENTS:
 * func - function to be executed after timeout.
 * time - positive number specifying the timeout time.
 * obj - optional object that the function will be called as a method of. If not
 *       specified the function is called as a method of null.
 * args - optional array of arguments to pass the function.
 * 
 * RETURNS:
 * [none]
 */
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
