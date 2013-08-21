/* isDefined(x)
 * 
 * ARGUMENTS:
 * x - variable
 * 
 * RETURNS:
 * true if x is defined, and false otherwise.
 */
var isDefined = function(x) {
    return x !== undefined;
};

/* isSomething(x)
 * 
 * ARGUMENTS:
 * x - variable
 * 
 * RETURNS:
 * true if x is something (and false otherwise), based on the following qualities:
 * it must be defined.
 * it must not be null.
 * if it's a number then it must not be zero.
 * if it's a string then it must not be the empty string.
 * if it's array-like then it must not have a length of zero.
 * if it's an object then it must have at least one enumerable non-inherited property.
 */
var isSomething = function(x) {
    
    // The variable cannot be undefined or null.
    if(!isDefined(x) || x === null) {
        return false;
    }
    
    // If the variable is a number then it cannot be 0.
    if(typeof x == "number" && x === 0) {
        return false;
    }
    
    // If the variable is a string then it cannot be empty.
    if(typeof x == "string" && x === "") {
        return false;
    }
    
    // If the variable is array-like than it cannot have a length of 0.
    if(isArrayLike(x) && x.length == 0) {
        return false;
    }
    
    // If the variable is an object then it cannot be empty.
    if(typeof x == "object" && isEmptyObject(x)) {
        return false;
    }
    
    // If nothing matched, then it is something.
    return true;
};

/* isNothing(x)
 * 
 * ARGUMENTS:
 * x - variable
 * 
 * RETURNS:
 * Opposite of isSomething(x).
 */
var isNothing = function(x) {
    return !isSomething(x);
};

/* isEmptyObject(x)
 * 
 * ARGUMENTS:
 * x - variable
 * 
 * RETURNS:
 * true if x is an object and has no enumerable non-inherited properties, and false otherwise.
 */
var isEmptyObject = function(x) {
    
    // The variable must be an object.
    if(typeof x != "object") {
        return null;
    }
    
    // Loop through the list items.
    for (var i in x) {
        
        // If it has a property defined specifically on this object
        // (inherited ones don't count), then it isn't empty.
        if(x.hasOwnProperty(i)) {
            return false;
        }
    }
    
    // Otherwise, return true.
    return true;
};

/* isArrayLike(x)
 * 
 * ARGUMENTS:
 * x - variable
 * 
 * RETURNS:
 * true if x is an array or is similar to an array, and false otherwise.
 */
var isArrayLike = function(x) {
    return x && typeof x == "object" && isDefined(x.length) && isFinite(x.length) && x.length >= 0 && x.length === Math.floor(x.length) && x.length < 4294967296;
};

/* isSameTypeAs(x, y)
 * 
 * ARGUMENTS:
 * x - variable
 * y - variable
 * 
 * RETURNS:
 * true if the type of x is the same as the type of y, and false otherwise.
 */
var isSameTypeAs = function(x, y) {
    return typeof x === typeof y;
};
