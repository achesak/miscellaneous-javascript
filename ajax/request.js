Http.request = function(x) {
    var onStart = x.onStart ? x.onStart : Http.options.onStart;
    if(onStart) {
        onStart();
    } 
    var r = new XMLHttpRequest();
    var c = 0;
    var t;
    var p1;
    var url = x.url ? x.url : Http.options.url;
    var async = x.async === undefined ? x.async : Http.options.async;
    var pL = x.paramLocation ? x.paramLocatioin : Http.options.paramLocation;
    var params;
    if(Http.options.params) {
        params = Http.options.params;
    }
    if(x.params) {
        params = Http.objMerge((params ? params : {}), x.params);
    }
    if(params) {
        params = Http.encode(params);
    }
    var headers;
    if(Http.options.headers) {
        headers = Http.options.headers;
    }
    if(x.headers) {
        headers = Http.objMerge((headers ? headers : {}), x.headers);
    }
    var method = x.method ? x.method : Http.options.method;
    if(params && (pL == "url" || pL == "both")) {
        url += "?" + params;
    }
    r.open(method, url, async);
    var onOpen = x.onOpen ? x.onOpen : Http.options.onOpen;
    if(onOpen) {
        onOpen(method, url, async);
    }
    if(headers) {
        for (var i in headers) {
            r.setRequestHeader(i, headers[i]);
        }
    }
    var props;
    if(Http.options.properties) {
        props = Http.options.properties;
    }
    if(x.properties) {
        props = Http.objMerge((props ? props : {}), x.properties);
    }
    if(props) {
        for (var j in props) {
            r[j] = props[j];
        }
    }
    var onSuccess = x.onSuccess ? x.onSuccess : Http.options.onSuccess;
    var onFailure = x.onFailure ? x.onFailure : Http.options.onFailure;
    if(async) {
        var timeout = x.timeout ? x.timeout : Http.options.timeout;
        var onTimeout = x.onTimeout ? x.onTimeout : Http.options.onTimeout;
        if(timeout) {
            t = setTimeout(function() {
                r.abort();
                if(onTimeout) {
                    onTimeout(timeout);
                }
            }, timeout);
        }
        var onSC = x.onStateChange ? x.onStateChange : Http.options.onStateChange;
        r.onreadystatechange = function() {
            if(r.readyState == 4) {
                if(t) {
                    clearTimeout(t);
                }
                if(r.status == 200) {
                    p1 = true;
                    onComplete(r);
                } else {
                    p1 = false;
                    if(onFailure) {
                        onFailure(r.status, r.statusText, r);
                    }
                }
            } else if(onSC) {
                onSC(++c);
            }
        };
    }
    var toSend = null;
    if(params && (pL == "send" || pL == "both")) {
        toSend = params;
    }
    if(Http.options.toSend != null) {
        toSend = Http.options.toSend;
    }
    if(x.toSend !== undefined) {
        toSend = x.toSend;
    }
    r.send(toSend);
    var onSend = x.onSend ? x.onSend : Http.options.onSend;
    if(onSend) {
        onSend(toSend);
    }
    if(!async) {
        if(r.status == 200) {
            p1 = true;
            onSuccess(r);
        } else {
            p1 = false;
            if(onFailure) {
                onFailure(r.status, r.statusText, r);
            }
        }
    }
    var onComplete = x.onComplete ? x.onComplete : Http.options.onComplete;
    if(onComplete) {
        onComplete(url, p1);
    }
};

Http.options = {
    method: "GET",
    async: true,
    params: null,
    paramLocation: "url",
    toSend: null,
    properties: null,
    headers: null,
    url: null,
    timeout: null,
    onSuccess: null,
    onFailure: null,
    onStart: null,
    onComplete: null,
    onOpen: null,
    onSend: null,
    onTimeout: null,
    onStateChange: null
};