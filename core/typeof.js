/* typeOf(x) -- returns the type of the variable x. */
var typeOf = function(x) {
    if(x === null) {
        return "null";
    }
    if(x === undefined) {
        return "undefined";
    }
    if(x !== x) {
        return "NaN";
    }
    var type = typeof x;
    if(type != "object") {
        return type;
    }
    return Object.prototype.toString.call(x).slice(8, -1);
};