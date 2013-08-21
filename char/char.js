/* Char constructor
 * 
 * ARGUMENTS:
 * c - character
 */
var Char = function(c) {
    
    // Argument must be a string with a length of 1.
    if(typeof c != "string" || (typeof c == "string" && c.length != 1)) {
        throw new Error("Invalid argument to Char constructor.");
    }
    
    // Define the object properties.
    Object.defineProperties(this, {value: 
                                  {value: c,
                                  enumerable: true,
                                  writable: false,
                                  configurable: false}});
};


Object.defineProperties(Char.prototype, {
    
    /* char.is(x)
     * 
     * ARGUMENTS:
     * x - one character string
     * 
     * RETURNS:
     * true if x is the same as the character, and false otherwise.
     */
    is: {
        value: function(x) { return this.value == x;}
    },
    
    /* char.charCode()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * Character code of the character.
     */
    charCode: {
        value: function() { return this.value.charCodeAt(0);}
    },
    
    /* char.matches(r)
     * 
     * ARGUMENTS:
     * r - regular expression
     * 
     * RETURNS:
     * true if the character matches regular expression r, and false otherwise.
     */
    matches: {
        value: function(r) { return this.value.search(r) != -1;}
    },
    
    /* char.toUpper()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * A new Char object of the uppercase version of the character.
     */
    toUpper: {
        value: function() { return new Char(this.value.toUpperCase());}
    },
    
    /* char.toLower()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * A new Char object of the lowercase version of the character.
     */
    toLower: {
        value: function() { return new Char(this.value.toLowerCase());}
    },
    
    /* char.isAlpha()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * true if the character is a letter, and false otherwise.
     */
    isAlpha: {
        value: function() { return this.matches(/[a-z]/i);}
    },
    
    /* char.isDigit()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * true if the character is a number, and false otherwise.
     */
    isDigit: {
        value: function() { return this.matches(/\d/);}
    },
    
    /* char.isAlnum()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * true if the character is alphanumeric, and false otherwise.
     */
    isAlnum: {
        value: function() { return this.isAlpha() || this.isDigit();}
    },
    
    /* char.isSpace()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * true if the character if space, and false otherwise.
     */
    isSpace: {
        value: function() { return this.matches(/\s/);}
    },
    
    /* char.isUpper()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * true if the character if uppercase, and false otherwise.
     */
    isUpper: {
        value: function() { return this.matches(/[A-Z]/);}
    },
    
    /* char.isLower()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * true if the character if lowercase, and false otherwise.
     */
    isLower: {
        value: function() { return this.matches(/[a-z]/);}
    },
    
    /* char.toString()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * The character as a string.
     */
    toString: {
        value: function() { return this.value;}
    },
    
    /* char.valueOf()
     * 
     * ARGUMENTS:
     * [none]
     * 
     * RETURNS:
     * The character as a string.
     */
    valueOf: {
        value: function() { return this.value;}
    }
});

/* Char.fromCharCode(c)
 * 
 * ARGUMENTS:
 * c - character code
 * 
 * RETURNS:
 * New Char object of the character given by character code c.
 */
Char.fromCharCode = function(c) {
    return new Char(String.fromCharCode(c));
};

/* string.charAtNew(x)
 * 
 * ARGUMENTS:
 * x - number
 * 
 * RETURNS:
 * New Char object of the character at position x.
 */
String.prototype.charAtNew = function(x) {
    return new Char(this.charAt(x));
};
