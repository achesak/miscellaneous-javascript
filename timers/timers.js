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
    
    // Variable to remember the return value.
    var r;
    
    // If no arguments were specified, use an empty array.
    var a = args ? args : [];
    
    // If no object was specified, use null.
    var o = obj ? obj : null;
    
    // Create the function to be run.
    var ifunc = function() {
        
        // If the last run retured false, don't continue the interval.
        if(r === false) {
            return;
        }
        
        // If something was returned, add it as the first argument.
        if(r !== undefined) {
            r = func.apply(o, [r].concat(a));
        
        // If nothing was returned, or this is the first time, just use
        // the arguments.
        } else {
            r = func.apply(o, a);
        }
        
        // Set the timer.
        setTimeout(ifunc, time)
    
    // Run the function.
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
    
    // If no object was specified, use null.
    var o = obj ? obj : null;
    
    // If arguments were specified:
    if(args) {
        
        // Set the timer.
        setTimeout(function() {
            func.apply(o, args);
        }, time);
    
    // If no arguments were specified:
    } else {
        
        // Set the timer.
        setTimeout(function() {
            func.apply(o);
        }, time);
    }
}

};
