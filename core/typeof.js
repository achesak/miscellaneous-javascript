/* typeOf(x)
 * 
 * ARGUMENTS:
 * x - variable to find the type of
 * 
 * RETURNS:
 * Type of x.
 */
var typeOf = function(x) {
    
    // Check if it's null.
    if(x === null) {
        return "null";
    }
    
    // Check if it's undefined.
    if(x === undefined) {
        return "undefined";
    }
    
    // Check if it's NaN.
    if(x !== x) {
        return "NaN";
    }
    
    // Check if the typeof keyword can help.
    var type = typeof x;
    if(type != "object") {
        return type;
    }
    
    // As a last resort, get the type out of the string "[object OBJECT_NAME]".
    return Object.prototype.toString.call(x).slice(8, -1);
};
