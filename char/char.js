var Char = function(c) {
    if(typeof c != "string" || (typeof c == "string" && c.length != 1)) {
        throw new Error("Invalid argument to Char constructor.");
    }
    Object.defineProperties(this, {value: 
                                  {value: c,
                                  enumerable: true,
                                  writable: false,
                                  configurable: false}});
};

Object.defineProperties(Char.prototype, {
    is: {
        value: function(x) { return this.value == x;}
    },
    charCode: {
        value: function() { return this.value.charCodeAt(0);}
    },
    matches: {
        value: function(r) { return this.value.search(r) != -1;}
    },
    toUpper: {
        value: function() { return new Char(this.value.toUpperCase());}
    },
    toLower: {
        value: function() { return new Char(this.value.toLowerCase());}
    },
    isAlpha: {
        value: function() { return this.matches(/[a-z]/i);}
    },
    isDigit: {
        value: function() { return this.matches(/\d/);}
    },
    isAlnum: {
        value: function() { return this.isAlpha() || this.isDigit();}
    },
    isSpace: {
        value: function() { return this.matches(/\s/);}
    },
    isUpper: {
        value: function() { return this.matches(/[A-Z]/);}
    },
    isLower: {
        value: function() { return this.matches(/[a-z]/);}
    },
    toString: {
        value: function() { return this.value;}
    },
    valueOf: {
        value: function() { return this.value;}
    }
});

Char.fromCharCode = function(c) {
    return new Char(String.fromCharCode(c));
};

String.prototype.charAtNew = function(x) {
    return new Char(this.charAt(x));
};