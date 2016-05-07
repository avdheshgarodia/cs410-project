var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

var geocoderProvider = 'google';
var httpAdapter = 'https';
// optional 
var extra = {
    apiKey: 'AIzaSyBalTzWVTnSg14nx_F8ZnYsgmbwfi6Yhhk', // for Mapquest, OpenCage, Google Premier 
    formatter: null         // 'gpx', 'string', ... 
};
 
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);
 

app.get('/', function(request, response) {
  response.send('YAY HIIIII!')
})

// app.get('/process_get', function (req, res) {

//    // Prepare output in JSON format
//    response = {
//        location:req.query.location
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

app.use(express.static('public'));

app.get('/yelp', function(request, response) {
	var Yelp = require('yelp');

	var yelp = new Yelp({
 	 	consumer_key: 'wrkA_dfOUA1KkQ3vk5Oz5g',
  		consumer_secret: 'uqjeTS9lqAlhrTpzmMsti5kLxHE',
  		token: 'gQKUJvZoLTbQO0IYDQ0LuCLtTowcqBEC',
  		token_secret: 'Z_9p9w87sQ7RHHG6-OFiLF7-0bc',
	});

	yelp.search({ term: request.query.key, location: request.query.loc, sort: 0, limit: 20})
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

app.get('/twitter',function(request, response)
{
	var Twitter = require('twitter');
	var sentiment = require('sentiment');
	var client = new Twitter({
	consumer_key: 'K25sZbmTSsuOk9DXavWbM4Hgz',
  	consumer_secret: 'rK9ak1BDyBoxwUbAUSD9CbFeMommm94uPT1ZqzTk2inKryu6U1',
  	access_token_key: '725077273272045568-aIqv5U2DhcfUvxdZiQpE5Ac45hqYiRb',
  	access_token_secret: 'QhKt1UohTSuHpbPDHZeR98DfnnPvvrffCcRfXr8GS9YzV'
	});
	// Using callback 
	geocoder.geocode(request.query.loc, function(err, geocode_res) {
    	console.log(geocode_res);
    	var geostring = geocode_res[0].latitude+','+geocode_res[0].longitude+',10mi'
    	console.log("GEO: " + geostring);
		console.log("Q: " + request.query.q);
    	client.get('search/tweets', {q:request.query.q,geocode: geostring}, function(error, tweets, res){
	
			data = []
			tweets_content = tweets.statuses


			for(i = 0;i<tweets_content.length;i++)
			{
				tweet_text = tweets_content[i].text;
				opinion = sentiment(tweet_text)
				var x = {};
				x['tweet'] = tweet_text;
				x['sentiment'] = opinion.score;
				data.push(x)

				console.log(tweet_text)
				console.log(opinion.score)
			}
			response.send(data)
		});
	});
	

})

app.get('/weather',function(request,response)
{
	var Wunderground = require('wundergroundnode');
	var myKey = 'f5715763f3d6a541';
	var wunderground = new Wunderground(myKey);
	var query = 
	wunderground.conditions().forecast().request('Chicago', function(err, res){
    	response.send(res);
	})
// https://github.com/cendrizzi/wundergroundnode
//https://www.wunderground.com/weather/api/d/docs?d=index&MR=
})
// app.get('/sentiment',function(request,response)
// {
	
// 	var r1 = sentiment('Cats are stupid.');
// 	response.send(r1);        // Score: -2, Comparative: -0.666 
// 	var r2 = sentiment('Cats are totally amazing!');
// 	response.send        // Score: 4, Comparative: 1 
// 	//https://www.npmjs.com/package/sentiment
// })
// 

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
