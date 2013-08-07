Http.returnContents = function(url, opt) {
    var r = new XMLHttpRequest();
    if(opt && opt.params) {
        url += "?" + Http.encode(opt.params);
    }
    var type = (opt && typeof opt.type == "string") ? opt.type : "text";
    r.open("GET", url, false);
    if(opt && opt.headers) {
        for (var i in opt.headers) {
            r.setRequestHeader(i, opt.headers[i]);
        }
    }
    r.send(null);
    if(r.status == 200) {
        switch (type) {
        case "xml":
            return r.responseXML;
        case "json":
            if(JSON && JSON.parse) {
                return JSON.parse(r.responseText);
            } else {
                return eval("(" + r.responseText + ")");
            }
        case "object":
            return r;
        default:
            return r.responseText;
        }
    } else {
        throw new Error("Could not get file: " + r.status + " " + r.statusText);
    }
};