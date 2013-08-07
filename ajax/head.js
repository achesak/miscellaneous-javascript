Http.head = function(url, opt) {
    var r = new XMLHttpRequest();
    var c = 0;
    var t;
    var p1;
    if(opt.params) {
        x += "?" + Http.encode(opt.params);
    }
    if(opt.async === undefined) {
        opt.async = true;
    }
    r.open("HEAD", url, opt.async);
    if(opt.headers) {
        for (var i in opt.headers) {
            r.setRequestHeader(i, opt.headers[i]);
        }
    }
    if(opt.onStart) {
        opt.onStart();
    }
    if(opt.async) {
        if(opt.timeout) {
            t = setTimeout(function() {
                r.abort();
                if(opt.onTimeout) {
                    opt.onTimeout();
                }
            }, opt.timeout);
        }
        r.onreadystatechange = function() {
            if(r.readyState == 4) {
                if(t) {
                    clearTimeout(t);
                }
                if(r.status == 200) {
                    p1 = true;
                    opt.onSuccess(Http.head.parse(r.getAllResponseHeaders()));
                } else {
                    p1 = false;
                    if(opt.onFailure) {
                        opt.onFailure(r.status, r.statusText);
                    }
                }
            } else if(opt.onStateChange) {
                opt.onStateChange(++c);
            }
        };
    }
    r.send(null);
    if(!opt.async) {
        if(r.status == 200) {
            p1 = true;
            opt.onSuccess(Http.head.parse(r.getAllResponseHeaders()));
        } else {
            p1 = false;
            if(opt.onFailure) {
                opt.onFailure(r.status, r.statusText);
            }
        }
    }
    if(opt.onComplete) {
        opt.onComplete(p1);
    }
};

Http.head.parse = function(x) {
    var o = {};
    var h1 = x.split("\n");
    for (var i = 0; i < h1.length; i++) {
        var h2 = h1[i];
        if(h2.length == 0) {
            continue;
        }
        var h3 = h2.indexOf(":");
        var hh1 = h2.substring(0, h3).replace(/^\s*/, "").replace(/\s*$/, "");
        var hh2 = h2.substring(h3 + 1).replace(/^\s*/, "").replace(/\s*$/, "");
        o[hh1] = hh2;
    }
    return o;
};