/* htmldocument.select(x) -- selects all elements in the document that match query string x. */
HTMLDocument.prototype.select = function(x) {
    if(typeof x == "string") {
        var a = this.querySelectorAll(x);
        if(a.length == 1) {
            return a[0];
        }
        return Array.toArray(a);
    } else if(x instanceof Array) {
        var a = [];
        for (var i = 0; i < x.length; i++) {
            a.push(Array.toArray(this.querySelectorAll(x[i])));
        }
        return a;
    }
};

/* Array.toArray(x) -- converts array-like object x to a true array and returns the new array */
Array.toArray = function(x) {
    var a = [];
    for (var i = 0; i < x.length; i++) {
        a[i]= x[i];
    }
    return a;
};

/* array.each(x) -- invokes the function x as a method of each array item. x is passed two parameters:
the index of the current item, and a copy of the array. Note that modifying the copy of the array does not change
the original array. After the function has been invoked on every item, the method returns the original array. */
Array.prototype.each = function(x) {
    for (var i = 0; i < this.length; i++) {
        x.call(this[i], i, Array.toArray(this));
    }
    return this;
};