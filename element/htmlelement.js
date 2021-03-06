HTMLElement.prototype.styles = function(x, y) {
    if(arguments.length == 0) {
        return this.getAttribute("style");
    } else {
        if(x === true) {
            this.setAttribute("style", y);
        } else if(typeof x == "string") {
            if(y === true) {
                return this.style[x];
            } else {
                return this.computedStyle(x);
            }
        } else if(x instanceof Array) {
            var a = [];
            for (var i = 0; i < x.length; i++) {
                if(y === true) {
                    a[i] = this.style[x[i]];
                } else {
                    a[i] = this.computedStyle(x[i]);
                }
            }
            return a;
        } else {
            for (var i in x) {
                this.style[i] = x[i];
            }
        }
    }
};

HTMLElement.prototype.computedStyle = function(x) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(this, "")[x];
    } else if(this.currentStyle) {
        return this.currentStyle[x];
    }
};

HTMLElement.prototype.getX = function() {
    var r = 0;
    for (var i = this; i; i = i.offsetParent) {
        r += i.offsetLeft;
    }
    for (i = this.parentNode; i && i != document.body; i = i.parentNode) {
        if(i.scrollLeft) {
            r -= i.scrollLeft;
        }
    }
    return r;
};

HTMLElement.prototype.getY = function() {
    var r = 0;
    for (var i = this; i; i = i.offsetParent) {
        r += i.offsetTop;
    }
    for (i = this.parentNode; i && i != document.body; i = i.parentNode) {
        if(i.scrollTop) {
            r -= i.scrollTop;
        }
    }
    return r;
};

HTMLElement.prototype.getXY = function() {
    return {x: this.getX(), y: this.getY()};
};