HTMLElement.prototype.animate = function(x) {
    var e = this;
    var t = 0;
    var f = 0;
    if(x.onStart) {
        x.onStart(e);
    }
    var v = setInterval(next, x.time);
    function next() {
        if(f >= x.frames) {
            clearInterval(v);
            if(x.onComplete) {
                x.onComplete(e);
            }
            return;
        }
        for (var i in x.animation) {
            try {
                e.style[i] = x.animation[i](f, t);
            } catch (e) {}
        }
        f++;
        t += x.time;
    }
};