var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'K25sZbmTSsuOk9DXavWbM4Hgz',
  consumer_secret: 'rK9ak1BDyBoxwUbAUSD9CbFeMommm94uPT1ZqzTk2inKryu6U1',
  access_token_key: '725077273272045568-aIqv5U2DhcfUvxdZiQpE5Ac45hqYiRb',
  access_token_secret: 'QhKt1UohTSuHpbPDHZeR98DfnnPvvrffCcRfXr8GS9YzV'
});
client.get('geo/search', {query: 'Champaign'}, function(error, tweets, response){
   console.log(tweets);
});