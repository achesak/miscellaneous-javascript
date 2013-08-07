var Http = {};

Http.UNSENT = 0;
Http.OPENED = 1;
Http.HEADERS_RECIEVED = 2;
Http.LOADING = 3;
Http.DONE = 4;

Http.encode = function(x) {
    var a = [];
    for (var i in x) {
        if(!x.hasOwnProperty(i)) {
            continue;
        }
        if(typeof x[i] == "function") {
            continue;
        }
        a.push(encodeURIComponent(i.replace(/ /g, "+")) + "=" + encodeURIComponent(x[i].toString().replace(/ /g, "+")));
    }
    return a.join("&");
};

Http.objMerge = function(x, y) {
    var o = y;
    for (var i in x) {
        if(!o.hasOwnProperty(i)) {
            o[i] = x[i];
        }
    }
    return o;
};