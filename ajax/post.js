Http.post = function(url, opt) {
    var r = new XMLHttpRequest();
    var c = 0;
    var t;
    var p1;
    if(opt.async === undefined) {
        opt.async = true;
    }
    if(typeof opt.type != "string") {
        opt.type = "text";
    }
    r.open("POST", url, opt.async);
    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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
                    switch (opt.type) {
                    case "xml":
                        opt.onSuccess(r.responseXML);
                        break;
                    case "json":
                        if(JSON && JSON.parse) {
                            opt.onSuccess(JSON.parse(r.responseText));
                        } else {
                            opt.onSuccess(eval("(" + r.responseText + ")"));
                        }
                        break;
                    case "object":
                        opt.onSuccess(r);
                        break;
                    default:
                        opt.onSuccess(r.responseText);
                    }
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
    r.send(Http.encode(opt.params));
    if(!opt.async) {
        if(r.status == 200) {
            p1 = true;
            switch (opt.type) {
            case "xml":
                opt.onSuccess(r.responseXML);
                break;
            case "json":
                if(JSON && JSON.parse) {
                    opt.onSuccess(JSON.parse(r.responseText));
                } else {
                    opt.onSuccess(eval("(" + r.responseText + ")"));
                }
                break;
            case "object":
                 opt.onSuccess(r);
                 break;
            default:
                 opt.onSuccess(r.responseText);
            }
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