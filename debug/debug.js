	var Debug = {

enabled: true,

breakpoint: function(func, title) {
    if(!Debug.breakpoint) {
        return false;
    }
    var expr = "";
    var result;
    var resultArray = [];
    while (true) {
        var msg = "";
        if(title) {
            msg += title + "\n";
        }
        if(expr) {
            msg += expr + " -> " + result + "\n";
        }
        msg += "Expression:";
        expr = prompt(msg, expr);
        if(!expr) {
            return resultArray;
        }
        result = func(expr);
        resultArray.push(result);
    }
}

};