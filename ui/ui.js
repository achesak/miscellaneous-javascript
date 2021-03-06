/* htmlelement.show() -- shows the element */
HTMLElement.prototype.show = function() {
    this.style.visibility = "visible";
};

/* htmlelement.hide() -- hides the element */
HTMLElement.prototype.hide = function() {
    this.style.visibility = "hidden";
};
	
/* htmlelement.toggle() -- toggles visibility of an element */
HTMLElement.prototype.toggle = function() { 
    if(this.computedStyle("visibility") != "visible") {
	    this.style.visibility = "visible";
	} else {
	    this.style.visibility = "hidden";
	}
};