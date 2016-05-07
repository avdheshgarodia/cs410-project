var geocoderProvider = 'google';
var httpAdapter = 'https';
// optional 
var extra = {
    apiKey: 'AIzaSyBalTzWVTnSg14nx_F8ZnYsgmbwfi6Yhhk', // for Mapquest, OpenCage, Google Premier 
    formatter: null         // 'gpx', 'string', ... 
};
 
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);
 
// Using callback 
geocoder.geocode('29 champs elysée paris', function(err, res) {
    console.log(res);
});
 
