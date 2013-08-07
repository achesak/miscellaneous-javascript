Http.jsonp = function(url, opt) {
    var num = "jsonp" + Http.jsonp.id++;
    var name = "Http.jsonp." + num;
    var param = opt.param ? opt.param : Http.jsonp.paramName;
    url += (url.indexOf("?") == -1 ? "?" : "&") + param + "=" + name;
    var doc = opt.document ? opt.document : document;
    var s = doc.createElement("script");
    Http.jsonp[num] = function(json) {
        try {
            opt.onSuccess(json);
        } catch (ex) {
            if(opt.onFailure) {
                opt.onFailure(ex);
            }
        } finally {
            delete Htto.jsonp[num];
            s.parentNode.removeChild(s);
        }
    };
    s.src = url;
    doc.body.appendChild(s);
};

Http.jsonp.id = 0;
Http.jsonp.paramName = "jsonp";