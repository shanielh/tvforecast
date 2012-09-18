# tvforecast

Easy way to get tv forecast information.

## Usage

From console

    node index.js "Covert Affairs" "White Collar"
    
Or within a script 

    var tvforecast = require("./ext/tvforecast/src/main");
    
    // Will write "Covert Affairs" information to log
    tvforecast("Covert Affairs", null, console.log);    
