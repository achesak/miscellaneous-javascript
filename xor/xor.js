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
    var r = false;
    for (var i = 0; i < arguments.length; i++) {
       r = arguments[i] || r ? (arguments[i] && r ? false : true) : false;
    }
    return r;
};
