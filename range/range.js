/*
 * range(low, high, plus)
 * 
 * ARGUMENTS:
 * if one argument:
 *     Argument specifies high value, low is set to 0, and the increment
 *     is set to 1.
 * if two arguments:
 *     First argument specifies low value, second argument specifies high
 *     value, and the increment is set to 1.
 * if three arguments:
 *     First argument specifies low value, second argument specifies high
 *     value, and third argument specifies increment.
 * 
 * RETURNS:
 * Array of numbers, based on arguments given.
 */
var range = function(low, high, plus) {
    
    // If there is only one argument:
    if(arguments.length == 1) {
        high = low;
        low = 0;
        plus = 1;
    
    // If there are two arguments:
    } else if(arguments.length == 2) {
        plus = 1;
    }
    
    // Create the array.
    var a = [];
    
    // Populate the array based on the arguments given.
    for (var i = low; i < high; i += plus) {
        a.push(i);
    }
    
    // Return the array.
    return a;
};
