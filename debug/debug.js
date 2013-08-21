var Debug = {

// Set this value to false if debugging should be disabled.
enabled: true,

/*
 * Debug.breakpoint(func, title)
 * 
 * ARGUMENTS:
 * func - function to be run.
 * title - optional title to use in the dialog.
 * 
 * RETURNS:
 * Array of all the previous results.
 * 
 * NOTES:
 * Executes the function until an empty string is entered. Shows result
 * of last expression in the dialog, and returns all of them when the
 * function completes.
 */
breakpoint: function(func, title) {
    
    // If debugging is disabled, don't continue.
    if(!Debug.enabled) {
        return false;
    }
    
    // Variable to remember the last expression.
    var expr = "";
    
    // Variable to remember the last result.
    var result;
    
    // Array to remember all the results.
    var resultArray = [];
    
    // Loop until the user says to exit.
    while (true) {
        
        // Build the message.
        var msg = "";
        
        // If a title was given, add that.
        if(title) {
            msg += title + "\n";
        }
        
        // Add the previous expression and result, if there was one.
        if(expr) {
            msg += expr + " -> " + result + "\n";
        }
        
        // Add the prompt.
        msg += "Expression:";
        
        // Show the prompt.
        expr = prompt(msg, expr);
        
        // If an empty string was entered, return the array of results.
        if(!expr) {
            return resultArray;
        }
        
        // Get the result.
        result = func(expr);
        
        // Add the result to the array.
        resultArray.push(result);
    }
}

};
