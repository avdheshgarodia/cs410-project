var Wunderground = require('wundergroundnode');
var myKey = 'f5715763f3d6a541';
var wunderground = new Wunderground(myKey);
wunderground.conditions().request('61820', function(err, response){
    console.log(response);
})
// https://github.com/cendrizzi/wundergroundnode