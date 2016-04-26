var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('YAY HIIIII!')
})

app.get('/yelp', function(request, response) {
  	//var yelp = require("node-yelp");
 
 
	// var client = yelp.createClient({
	//   oauth: {
	//     "consumer_key": "wrkA_dfOUA1KkQ3vk5Oz5g",
	//     "consumer_secret": "uqjeTS9lqAlhrTpzmMsti5kLxHE",
	//     "token": "gQKUJvZoLTbQO0IYDQ0LuCLtTowcqBEC",
	//     "token_secret": "Z_9p9w87sQ7RHHG6-OFiLF7-0bc"
	//   },
	  
	//   // Optional settings: 
	//   httpClient: {
	//     maxSockets: 25  // ~> Default is 10 
	//   }
	// });
	 
	 
	// client.search({
	//   terms: "food",
	//   location: "Champaign, Il",
	//   limit: "100",
	//   sort: "2"

	// }).then(function (data) {
	//   var names = [];
	//   var businesses = data.businesses;
	//   var location = data.region;
	//   for(i=0;i<businesses.length;i++){
	//   	names.push(businesses[i].name)
	//   }
	//   response.send(names)
	   
	// });
	var Yelp = require('yelp');

	var yelp = new Yelp({
 	 	consumer_key: 'wrkA_dfOUA1KkQ3vk5Oz5g',
  		consumer_secret: 'uqjeTS9lqAlhrTpzmMsti5kLxHE',
  		token: 'gQKUJvZoLTbQO0IYDQ0LuCLtTowcqBEC',
  		token_secret: 'Z_9p9w87sQ7RHHG6-OFiLF7-0bc',
	});

	yelp.search({ term: 'food', location: 'Champaign, Il', sort: 0, limit: 20})
	.then(function (data) {
  		//response.send(data);
  		//response.send('test');

  	  var names = [];
	  var businesses = data.businesses;
	  var location = data.region;
	  for(i=0;i<businesses.length;i++){
	  	names.push(businesses[i].name)
	  }
	  response.send(names)
	   

	})





})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
