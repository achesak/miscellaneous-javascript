Http.loadJS = function(url, opt) {
    if((opt && opt.check !== false) || !opt) {
        if(Http.loadedJS.indexOf(url) != -1) {
            return;
        }
    }
    var doc = (opt && opt.document) ? opt.document : document;
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.src = url;
    if(opt && opt.attributes) {
        for (var i in opt.attributes) {
            s.setAttribute(i, opt.attributes[i]);
        }
    }
    if(opt && opt.location == "head") {
        doc.getElementsByTagName("head")[0].appendChild(s);
    } else {
        doc.body.appendChild(s);
    }
    Http.loadedJS.push(url);
};

Http.loadedJS = [];