var tvforecast = require('./tvforecast');
var wantedParams = ['Show Name', 'Latest Episode', 'Next Episode'];

process.argv.splice(2).forEach(function(val, index) {
    
    tvforecast(val, wantedParams, console.log);

});