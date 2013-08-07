/* 
ARGUMENTS:
x - string
RETURNS: true if x is a substring of the string, and false otherwise
*/
if(!String.prototype.exists) {
    String.prototype.exists = function(x) {
        return this.indexOf(x) > -1;
    };
}

/* 
RETURNS: a new string with all occurences of x removed
*/
if(!String.prototype.remove) {
    String.prototype.remove = function(x) {
        return this.replace(x, "");
    };
}

/* 
RETURNS: a new string with all whitespace removed from the start and end
*/
if(!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "");
    };
}

/* 
RETURNS: a new string with all whitespace removed from the start
*/
if(!String.prototype.trimStart) {
    String.prototype.trimStart = function() {
        return this.replace(/^\s+/, "");
    };
}

/* 
RETURNS: a new string with all whitespace removed from the end
*/
if(!String.prototype.trimEnd) {
    String.prototype.trimEnd = function() {
        return this.replace(/\s+$/, "");
    };
}

/* 
RETURNS: a new string with all whitespace removed
*/
if(!String.prototype.strip) {
    String.prototype.strip = function() {
        return this.replace(/\s+/g, " ");
    };
}

/* 
RETURNS: the last character of the string
*/
if(!String.prototype.lastChar) {
    String.prototype.lastChar = function() {
        return this.charAt(this.length - 1);
    };
}

/* 
RETURNS: a new string that is the reverse of the original
*/
if(!String.prototype.reverse) {
    String.prototype.reverse = function() {
        var a = this.split("");
        a.reverse();
        return a.join("");
    };
}

/* 
ARGUMENTS:
x - string
RETURNS: number of times x appears in the string
*/
if(!String.prototype.appears) {
    String.prototype.appears = function(x) {
        var f = 0;
        var c = 0;
        while (f != -1) {
            f = this.indexOf(x, f);
            if(f != -1) {
                c++;
                f++;
            }
        }
        return c;
    };
}

/*
ARGUMENTS:
x - number
RETURNS: an array with two strings created by splitting the string at position x
*/
if(!String.prototype.splitAtPos) {
    String.prototype.splitAtPos = function(x) {
        if(x < 0) {
            return this;
        }
        if(x > this.length) {
            return this;
        }
        return [this.substring(0, x), this.substring(x, this.length)];
    };
}

/* 
ARGUMENTS:
x - number
y - number
RETURNS: a new string with the substring between positions x and y removed
*/
if(!String.prototype.extract) {
    String.prototype.extract = function(x, y) {
        if(y < x) {
            return this;
        }
        return this.substring(0, x) + this.substring(y, this.length);
    };
}

/*
ARGUMENTS:
x - number
y - string
RETURNS: a new string with string y inserted at position x
*/
if(!String.prototype.insertAtPos) {
    String.prototype.insertAtPos = function(x, y) {
        if(x < 0) {
            return this;
        }
        return this.substring(0, x) + y + this.substring(x, this.length);
    };
}

/*
ARGUMENTS:
x - number
y - number
RETURNS: a new string with the substring between positions x and y moved to the start
*/
if(!String.prototype.moveToStart) {
    String.prototype.moveToStart = function(x, y) {
        if(y < x) {
            return this;
        }
        return this.substring(x, y) + this.substring(0, x) + this.substring(y, this.length);
    };
}

/*
ARGUMENTS:
x - number
y - number
RETURNS: a new string with the substring between positions x and y moved to the end
*/
if(!String.prototype.moveToEnd) {
    String.prototype.moveToEnd = function(x, y) {
        if(y < x) {
            return this;
        }
        return this.substring(0, x) + this.substring(y, this.length) + this.substring(x, y);
    };
}

/*
RETURNS: a new string with inverted case
*/
if(!String.prototype.invert) {
    String.prototype.invert = function() {
        var x = this.split("");
        for (var i = 0; i < x.length; i++) {
            if(x[i] == x[i].toLowerCase()) {
                x[i] = x[i].toUpperCase();
            } else {
                x[i] = x[i].toLowerCase();
            }
        }
        return x.join("");
    };
}

/*
ARGUMENTS:
x - array of strings
RETURNS: a new string with all characters in x removed
*/
if(!String.prototype.removeChars) {
    String.prototype.removeChars = function(x) {
        var str = this;
        for (var i = 0; i < x.length; i++) {
            str = str.replace(x[i], "");
        }
        return str;
    };
}

/*
RETURNS: a new string with all punctuation removed
*/
if(!String.prototype.removePunct) {
    String.prototype.removePunct = function() {
        return this.removeChars([".", ",", ";", ":", "?", "!", '"', "'"]);
    };
}

/*
RETURNS: a new string with all numbers removed.
*/
if(!String.prototype.removeNumbers) {
    String.prototype.removeNumbers = function() {
        return this.replace(/\d/g, "");
    };
}

/*
RETURNS: a new string with all letters removed
*/
if(!String.prototype.removeLetters) {
    String.prototype.removeLetters = function() {
        return this.replace(/[a-z]/gi, "");
    };
}

/*
RETURNS: a new string with all uppercase letters removed
*/
if(!String.prototype.removeUcase) {
    String.prototype.removeUcase = function() {
        return this.replace(/[A-Z]/g, "");
    };
}

/*
RETURNS: a new string with all lowercase letters removed
*/
if(!String.prototype.removeLcase) {
    String.prototype.removeLcase = function() {
        return this.replace(/[a-z]/g, "");
    };
}

/*
RETURNS: a new string with all non-alphanumeric characters removed
*/
if(!String.prototype.removeNonAlnum) {
    String.prototype.removeNonAlnum = function() {
        return this.replace(/\W_/g, "");
    };
}

/*
RETURNS: a new string with all alphanumeric characters removed
*/
if(!String.prototype.removeAlnum) {
    String.prototype.removeAlnum = function() {
        return this.replace(/[a-z]\d/gi, "");
    };
}

/*
RETURNS: true if the string is a palindrome, and false otherwise
*/
if(!String.prototype.isPalindrome) {
    String.prototype.isPalindrome = function() {
        var str = this.removePunct().replace(/\s/g, "").toLowerCase();
        return str == str.reverse();
    };
}

/*
RETURNS: true if the string is a legal JavaScript variable name, and false otherwise
*/
if(!String.prototype.isLegalName) {
    String.prototype.isLegalName = function() {
        if(/\W/.test(this) || /^\d/.test(this)) {
            return false;
        }
        return true;
    };
}