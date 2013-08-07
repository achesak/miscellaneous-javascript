/* htmlelement.hasClass(x) -- returns true if element has class x, and false if not. */
HTMLElement.prototype.hasClass = function(x) {
    var c = this.className;
    if(!c) {
        return false;
    }
    if(c == x) {
        return true;
    }
    return this.className.search(new RegExp("\\b" + x + "\\b")) != -1;
};
	
/* htmlelement.addClass(x) -- adds class x to element. */
HTMLElement.prototype.addClass = function(x) {
    if(this.hasClass(x)) {
        return;
    }
    this.className += " " + x;
};

/* htmlelement.removeClass(x) -- removes class x from element. */
HTMLElement.prototype.removeClass = function(x) {
    this.className = this.className.replace(new RegExp("\\b" + x + "\\b\\s*", "g"), "");
};
	
/* htmlelement.toggleClass(x) -- toggles class x on element. */
HTMLElement.prototype.toggleClass = function(x) {
    if(!(this.hasClass(x))) {
        this.addClass(x);
    } else {
        this.removeClass(x);
    }
};

/* htmlelement.hasAnyClasses() -- returns whether or not the element has any classes */
HTMLElement.prototype.hasAnyClasses = function() {
    return this.hasAttribute("class") && /[^\s]/.test(this.className);
};

/* htmlelement.prototype.removeAllClasses() -- removes all classes from an element */
HTMLElement.prototype.removeAllClasses = function() {
    this.className = "";
};

/* htmlelement.getClasses() -- returns an array of all classes this element has */
HTMLElement.prototype.getClasses = function() {
    return this.className.trim().split(/\s+/g);
};

/* htmlelement.addOnlyClass(x) -- sets x as the only class of the element */
HTMLElement.prototype.addOnlyClass = function(x) {
    this.className = x;
};           