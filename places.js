
	// AIzaSyAL0-soMhPGlNkHmj1vjhhfYsvNozLeSQs
	var GoogleLocations = require('google-locations');
	var locations = new GoogleLocations('AIzaSyAL0-soMhPGlNkHmj1vjhhfYsvNozLeSQs');
	locations.search({keyword: 'Google', location: [37.42291810, -122.08542120]}, function(err, response) {
  	console.log("search: ", response.results);
  })