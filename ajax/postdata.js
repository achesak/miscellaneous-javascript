Http.postData = function(url, data, opt) {
    var r = new XMLHttpRequest();
    var async = true;
    if(opt && opt.async === false) {
        async = false;
    }
    var parseData = true;
    if(opt && opt.parseData === false) {
        parseData = true;
    }
    r.open("POST", url, async);
    if(parseData) {
        r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if(opt && opt.headers) {
        for (var i in opt.headers) {
            r.setRequestHeader(i, opt.headers[i]);
        }
    }
    r.send(parseData ? Http.encode(data) : data);
};