/*
 * Boolean.xor(a[, b[, c]] ...)
 * 
 * ARGUMENTS:
 * any number of any type
 * 
 * RETURNS:
 * XOR value of all the arguments. (True if one true value, false otherwise.)
 */
Boolean.xor = function() {
    
    // Base value is false.
    var r = false;
    
    // Loop through every argument:
    for (var i = 0; i < arguments.length; i++) {
        
        // Determine if the value should be changed.
        r = arguments[i] || r ? (arguments[i] && r ? false : true) : false;
    }
    
    // Return the value.
    return r;
};
