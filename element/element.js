/* element.toggleAttribute(x, y) -- toggles attribute x with value y */
Element.prototype.toggleAttribute = function(x, y) {
    if(this.hasAttribute(x)) {
        this.removeAttribute(x);
    } else {
        this.setAttribute(x, y);
    }
};

/* element.sort() -- sort the children of the element */
Element.prototype.sort = function() {
    var a = [];
    for (var i = this.firstChild; i != null; i = i.nextSibling) {
        if(i.nodeType == 1) {
            a.push(i);
        }
    }
    a.sort(function(x, y) {
        var a1 = x.firstChild.data;
        var a2 = y.firstChild.data;
        if(a1 < a2) {
            return -1;
        } else if(a1 > a2) {
            return 1;
        } else {
            return 0;
        }
    });
    for (var j = 0; j < a.length; j++) {
        this.appendChild(a[j]);
    }
};

/* element.reverse() -- reverses the order of the children of the element */
Element.prototype.reverse = function() {
    var d = this.ownerDocument.createDocumentFragment();
    while (this.lastChild) {
        d.appendChild(this.lastChild);
    }
    this.appendChild(d);
};

/* element.appendChildren() -- appends children to the element. Can take an unlimited number of parameters. If parameter is a string, it will be converted to a text node. 
This is more efficent than appending nodes with multiple calls to appendChild()
*/
Element.prototype.appendChildren = function() {
    var d = this.ownerDocument.createDocumentFragment();
    for (var i = 0; i < arguments.length; i++) {
        var e = arguments[i];
        if(typeof e == "string") {
            e = this.ownerDocument.createTextNode(e);
        }
        d.appendChild(e);
    }
    this.appendChild(d);
};

/* element.remove() -- removes and returns the element */
Element.prototype.remove = function() {
    return this.parentNode.removeChild(this);
};

/* element.removeAll() -- removes all children from the element */
Element.prototype.removeAll = function() {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};

/* element.insertAfter(x, y) -- inserts element x after element y */
Element.prototype.insertAfter = function(x, y) {
    var z = y.firstChild;
    if(z) {
        this.insertBefore(x, z);
    } else {
        this.appendChild(x);
    }
};

/* element.wrap(x, y) -- wraps element inside a new element. x is tag name of elememt to wrap in. y is an optional object with the attributes for the wrapping element. */
Element.prototype.wrap = function(x, y) {
    var e = this.ownerDocument.createElement(x);
    if(y) {
        for (var i in y) {
            e.setAttribute(i, y[i]);
        }
    }
    this.parentNode.replaceChild(e, this);
    e.appendChild(this);
};

/* element.wrapInside(x, y) -- wraps children of the children in another element. x is tag name of element to wrap with. y is an options objest with the attributes for the wrapping element. */
Element.prototype.wrapInside = function(x, y) {
    var e = this.ownerDocument.createElement(x);
    if(y) {
        for (var i in y) {
            e.setAttribute(i, y[i]);
        }
    }
    var d = this.ownerDocument.createDocumentFragment();
    while (this.firstChild) {
        d.appendChild(this.firstChild);
    }
    e.appendChild(d);
    this.appendChild(e);
};

/* element.before(x) -- inserts x before element. */
Element.prototype.before = function(x) {
    this.parentNode.insertBefore(x, this);
};

/* element.after(x) -- inserts x after element. */
Element.prototype.after = function(x) {
    this.parentNode.insertAfter(x, this);
};

Element.prototype.attribute = function(x, y) {
    if(arguments.length == 1) {
        if(typeof x == "string") {
            return this.getAttribute(x);
        } else if(x instanceof Array) {
            var a = [];
            for (var i = 0; i < x.length; i++) {
                a[i] = this.getAttribute(x[i]);
            }
            return a;
        } else {
            for (var i in x) {
                this.setAttribute(i, x[i]);
            }
        }
    } else {
        if(x == "has") {
            if(y === null) {
                return this.hasAttributes();
            } else if(typeof x == "string") {
                return this.hasAttribute(y);
            } else if(x instanceof Array) {
                var a = [];
                for (var i = 0; i < y.length; i++) {
                    a[i] = this.hasAttribute(y[i]);
                }
                return a;
            }
        } else if(x == "remove") {
            if(typeof y == "string") {
                this.removeAttribute(y);
            } else if(y instanceof Array) {
                for (var i = 0; i < y.length; i++) {
                    this.removeAttribute(y[i]);
                }
            }
        } else if(x == "toggle") {
            for (var i in y) {
                this.toggleAttribute(i, y[i]);
            }
        }
    }
};

Element.prototype.isParentOf = function(x) {
    return x.parentNode == this;
};

Element.prototype.isChildOf = function(x) {
    return this.parentNode == x;
};

Element.prototype.isAncestorOf = function(x) {
    var e = x.parentNode;
    while (e != null) {
        if(e == this) {
            return true;
        }
        e = e.parentNode;
    }
    return false;
};

Element.prototype.inDescendantOf = function(x) {
    var e = this.parentNode;
    while (e != null) {
        if(e == x) {
            return true;
        }
        e = e.parentNode;
    }
    return false;
};

Element.prototype.copyChildrenToDocumentFragment = function(x) {
    if(!isDefined(x)) {
        x = false;
    }
    var d = this.ownerDocument.createDocumentFragment();
    for (var i = 0; i < this.childNodes.length; i++) {
        d.appendChild(this.childNodes[i].cloneNode(x));
    }
    return d;
};

Element.prototype.moveChildrenToDocumentFragment = function() {
    var d = this.ownerDocument.createDocumentFragment();
    while (this.firstChild) {
        d.appendChild(this.removeChild(this.firstChild));
    }
    return d;
};

Element.prototype.appendTextNode = function(x) {
    this.appendChild(this.ownerDocument.createTextNode(x));
};

Element.prototype.prependTextNode = function(x) {
    var t = this.ownerDocument.createTextNode(x);
    if(this.childNodes.length == 0) {
        this.appendChild(t);
    } else {
        this.insertBefore(t, this.childNodes[0]);
    }
};

Element.prototype.insertFirst = function(x) {
    if(this.childNodes.length == 0) {
        this.appendChild(x);
    } else {
        this.insertBefore(x, this.childNodes[0]);
    }
};

Element.prototype.insertLast = function(x) {
    this.appendChild(x);
};

Element.prototype.insertAt = function(x, y) {
    this.insertBefore(x, this.childNodes[y]);
};

Element.prototype.replaceFirst = function(x) {
    if(this.childNodes.length != 0) {
        this.replaceChild(x, this.childNodes[0]);
    }
};

Element.prototype.replaceLast = function(x) {
    if(this.childNodes.length != 0) {
        this.replaceChild(x, this.childNodes[this.childNodes.length - 1]);
    }
};

Element.prototype.replaceAt = function(x, y) {
    if(this.childNodes.length != 0) {
        this.replaceChild(x, this.childNodes[y]);
    }
};

Element.prototype.removeFirst = function() {
    if(this.childNodes.length != 0) {
        return this.removeChild(this.childNodes[0]);
    }
};

Element.prototype.removeLast = function() {
    if(this.childNodes.length != 0) {
        return this.removeChild(this.childNodes[this.childNodes.length - 1]);
    }
};

Element.prototype.removeAt = function(x) {
    if(this.childNodes.length != 0) {
        return this.removeChild(this.childNodes[x]);
    }
};

Element.prototype.parent = function(x) {
    if(!isDefined(x)) {
        x = 1;
    }
    var t = this;
    while (n-- && t) {
        t = t.parentNode;
    }
    if(!e) {
        return null;
    }
    return t;
};

Element.prototype.sibling = function(x) {
    if(!isDefined(x)) {
        x = 1;
    }
    var t = this;
    while (t && x != 0) {
        if(x > 0) {
            for (t = t.nextSibling; t; t = t.nextSibling) {}
            n--;
        } else {
            for (t = t.previousSibling; t; t = t.previousSibling) {}
            n++;
        }
    }
    return t;
};

Element.prototype.hasParent = function() {
    return this.parentNode != null;
};

Element.prototype.hasSibling = function() {
    return this.nextSibling != null || this.previousSibling != null;
};

