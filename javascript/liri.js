//twitter 
const keys = require("./keys");

var Twitter = require("twitter");
var Spotify = require('node-spotify-api');

var fs = require("fs");


var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret,
});

var params = {screen_name: 'opsercanna'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    for (var i=0; i<tweets.length; i++) {
        console.log(tweets[i].text);
    }
  }
 
  
});

//spotify
var spotify = new Spotify({
	id: keys.spotifyKeys.id,
	secret: keys.spotifyKeys.secret
});

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
        console.log(data);
    // Do something with 'data'
});

// { tracks:
//     { href: 'https://api.spotify.com/v1/search?query=dancing+in+the+moonlight&type=track&offset=0&limit=20',
//       items:
//        [ [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object],
//          [Object] ],
//       limit: 20,
//       next: 'https://api.spotify.com/v1/search?query=dancing+in+the+moonlight&type=track&offset=20&limit=20',
//       offset: 0,
//       previous: null,
//       total: 868 } }


 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });