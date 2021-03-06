HTMLDocument.prototype.selectId = function(x) {
    if(typeof x == "string") {
        return this.getElementById(x);
    } else if(x instanceof Array) {
        var a = [];
        for (var i = 0; i < x.length; i++) {
            a.push(this.getElementById(x[i]));
        }
        return a;
    }
};

Document.prototype.selectTag = function(x) {
    if(typeof x == "string") {
        return Array.toArray(this.getElementsByTagName(x));
    } else if(x instanceof Array) {
        var a = [];
        for (var i = 0; i < x.length; i++) {
            a.push(Array.toArray(this.getElementsByTagName(x[i])));
        }
        return a;
    }
};

Document.prototype.selectAll = function() {
    return Array.toArray(this.getElementsByTagName("*"));
};

HTMLDocument.prototype.selectName = function(x) {
    if(typeof x == "string") {
        return Array.toArray(this.getElementsByName(x));
    } else if(x instanceof Array) {
        var a = [];
        for (var i = 0; i < x.length; i++) {
            a.push(Array.toArray(this.getElementsByName(x[i])));
        }
        return a;
    }
};

Document.prototype.selectSelect = function(x) {
    if(typeof x == "string") {
        return Array.toArray(this.querySelectorAll(x));
    } else if(x instanceof Array) {
        var a = [];
        for (var i = 0; i < x.length; i++) {
            a.push(Array.toArray(this.querySelectorAll(x[i])));
        }
        return a;
    }
};

Document.prototype.selectQuery = function(x) {
    if(typeof x == "string") {
        return this.querySelector(x);
    } else if(x instanceof Array) {
        var a = [];
        for (var i = 0; i < x.length; i++) {
            a.push(this.querySelector(x[i]));
        }
        return a;
    }
};

HTMLDocument.prototype.selectClass = function(x) {
    if(typeof x == "string") {
        return Array.toArray(this.getElementsByClassName(x));
    } else if(x instanceof Array) {
        var a = [];
        for (var i = 0; i < x.length; i++) {
            a.push(Array.toArray(this.getElementsByClassName(x[i])));
        }
        return a;
    }
};

if(!document.getElementsByClassName) {
    HTMLDocument.prototype.getElementsByClassName = function(x) {
        var e = this.getElementsByTagName("*");
        var a = [];
        for (var i = 0; i < a.length; i++) {
            if(e[i].hasClass(x)) {
                a.push(e[i]);
            }
        }
        return a;
    };
}