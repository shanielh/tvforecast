var r = require('./src/request/main');
var qs = require('querystring')

// Split the string by newline, and then by @
var paramsify = function(str, params) {
    
    var matches = str.split('\n');
    var retVal = [];
    
    for (var matchIndex in matches) {
        
        var match = matches[matchIndex];
        var splitIndex = match.indexOf('@');
        
        var key = match.substr(0, splitIndex);
        var value = match.substr(splitIndex + 1);
        
        // If 'newline'
        if (key == '' && value == '') {
            continue;
        }
        
        // If params doesn't contain the current key
        if (params != null && params.indexOf(key) == -1) {
            continue;
        }
        
        retVal[key] = value;
        
    }
    
    return retVal;
}

module.exports = function (showName, params, callback) {
    
    var url = 'http://services.tvrage.com/tools/quickinfo.php?' + qs.stringify({show : showName});
    
    // Get 
    var request = r.get(url, function(error, response, body) {
        
        // Remove the '<pre>' tag from the start of the body
        var realBody = body.substr('<pre>'.length);
        
        // Callback
        callback(paramsify(realBody, params));
        
    });
    
} 