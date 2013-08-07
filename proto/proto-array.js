/*
RETURNS: last value in array
*/
if(!Array.prototype.lastValue) {
    Array.prototype.lastValue = function() {
        return this[this.length - 1];
    };
}

/*
OPERATION: sorts the array, and reverses it
*/
if(!Array.prototype.reverseSort) {
    Array.prototype.reverseSort = function() {
        this.sort();
        this.reverse();
    };
}

/*
OPERATION: deletes all items in the array
*/
if(!Array.prototype.empty) {
    Array.prototype.empty = function() {
        this.length = 0;
    };
}

/*
RETURNS: true if the array has no items, and false otherwise.
*/
if(!Array.prototype.isEmpty) {
    Array.prototype.isEmpty = function() {
        return this.length == 0;
    };
}

/*
RETURNS: a pseudo-randomly selected item in the array
*/
if(!Array.prototype.random) {
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)];
    };
}