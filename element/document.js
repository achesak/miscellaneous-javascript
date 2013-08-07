Document.prototype.parseNodesFromString = function(x) {
    var f = this.createDocumentFragment();
    var t = this.createElement("div");
    t.innerHTML = x;
    while (t.firstChild) {
        f.appendChild(t.firstChild);
    }
    return f;
};

Document.prototype.parseNodeFromString = function(x) {
    return this.parseNodesFromString(x).firstChild;
};

Document.prototype.create = function(x, y) {
    var e = this.createElement(x);
    if(y) {
        if(y.children) {
            if(y.children instanceof Array) {
                for (var i = 0; i < y.children.length; i++) {
                    if(typeof y.children[i] == "string") {
                        e.appendChild(this.createTextNode(y.children[i]));
                    } else {
                        e.appendChild(y.children[i]);
                    }
                }
            } else {
                if(typeof y.children == "string") {
                    e.appendChild(this.createTextNode(y.children));
                } else {
                    e.appendChild(y.children);
                }
            }
        }
        if(y.attributes) {
            for (var i in y.attributes) {
                e.setAttribute(i, y.attributes[i]);
            }
        }
        if(y.style) {
            for (var j in y.style) {
                e.style[j] = y.style[j];
            }
        }
    }
    return e;
};