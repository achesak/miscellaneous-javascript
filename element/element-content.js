Element.prototype.getContent = function(x) {
    if(x == "text") {
        if(isDefined(this.textContent)) {
            return this.textContent;
        } else {
            return this.innerText;
        }
    } else {
        return this.innerHTML;
    }
};

Element.prototype.setContent = function(x, y) {
    if(y == "text") {
        if(isDefined(this.textContent)) {
            this.textContent = x;
        } else {
            this.innerText = x;
        }
    } else {
        this.innerHTML = x;
    }
};

Element.prototype.appendContent = function(x, y) {
    if(y == "text") {
        if(isDefined(this.textContent)) {
            this.textContent += x;
        } else {
            this.innerText += x;
        }
    } else {
        this.innerHTML += x;
    }
};

Element.prototype.prependContent = function(x, y) {
    if(y == "text") {
        if(isDefined(this.textContent)) {
            this.textContent = x + this.textContent;
        } else {
            this.innerText = x + this.innerText;
        }
    } else {
        this.innerHTML = x + this.innerHTML;
    }
};

Element.prototype.content = function(x, y, z) {
    if(arguments.length == 0) {
        return this.getContent();
    } else if(arguments.length == 1) {
        this.setContent(x);
    } else {
        if(x === null && y == "text") {
            return this.getContent("text");
        } else if(typeof x == "string" && y == "+") {
            if(z == "text") {
                this.appendContent(x, "text");
            } else {
                this.appendContent(x);
            }
        } else if(typeof x == "string" && y == "-") {
            if(z == "text") {
                this.prependContent(x, "text");
            } else {
                this.prependContent(x);
            }
        }
    }
};