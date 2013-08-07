var range = function(low, high, plus) {
    if(arguments.length == 1) {
        high = low;
        low = 0;
        plus = 1;
    } else if(arguments.length == 2) {
        plus = 1;
    }
    var a = [];
    for (var i = low; i < high; i += plus) {
        a.push(i);
    }
    return a;
};