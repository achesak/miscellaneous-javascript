Http.loadInto = function(elem, url, def) {
    Http.get(url, {onSuccess: function(r) {
        elem.innerHTML = r;}, onFailure: function() {
        if(def) { elem.innerHTML = def;}}});
};

Http.loadIntoSync = function(elem, url, def) {
    Http.get(url, {async: false, onSuccess: function(r) {
        elem.innerHTML = r;}, onFailure: function() {
        if(def) { elem.innerHTML = def;}}});
};