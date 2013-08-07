/* isDefined(x) -- returns true is x is defined, and false otherwise. */
var isDefined = function(x) {
    return x !== undefined;
};

/* isSomething(x) -- returns true if x is something (and false otherwise), based on the following qualities:

* it must be defined
* it must not be null
* if it's a number then it must not be zero
* if it's a string then it must not be the empty string
* if it's array-like then it must not have a length of zero
* if it's an object then it must have at least one enumerable non-inherited property
*/
var isSomething = function(x) {
    if(!isDefined(x) || x === null) {
        return false;
    }
    if(typeof x == "number" && x === 0) {
        return false;
    }
    if(typeof x == "string" && x === "") {
        return false;
    }
    if(isArrayLike(x) && x.length == 0) {
        return false;
    }
    if(typeof x == "object" && isEmptyObject(x)) {
        return false;
    }
    return true;
};

/* isNothing(x) -- returns the opposite of isSomething(x). */
var isNothing = function(x) {
    return !isSomething(x);
};

/* isEmptyObject(x) -- returns true if x is an object and has no enumerable non-inherited properties, and false otherwise. */
var isEmptyObject = function(x) {
    if(typeof x != "object") {
        return null;
    }
    for (var i in x) {
        if(x.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
};

/* isArrayLike(x) -- returns true if x is an array or is similar to an array, and false otherwise. */
var isArrayLike = function(x) {
    return x && typeof x == "object" && isDefined(x.length) && isFinite(x.length) && x.length >= 0 && x.length === Math.floor(x.length) && x.length < 4294967296;
};

/* isSameTypeAs(x, y) -- returns true if the type of x is the same as the type of y, and false otherwise. */
var isSameTypeAs = function(x, y) {
    return typeof x === typeof y;
};