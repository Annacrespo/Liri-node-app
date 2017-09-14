const keys = require("./keys");

const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const request = require("request");


const fs = require("fs");

//twitter
const client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret,
});

if (process.argv[2] === 'my-tweets') {

    const params = { screen_name: 'opsercanna' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log(tweets[i].text);
            }
        }
    })
}

// spotify
var spotify = new Spotify({
    id: keys.spotifyKeys.id,
    secret: keys.spotifyKeys.secret
});
if (process.argv[2] === "spotify-this-song") {
    if (process.argv[3]) {
        spotify.search({ type: 'track', query: process.argv[3] }, function (err, data) {
            if (err) {
                spotify.search({ type: 'track', query: 'Ace of Base Happy Nation The Sign' }, function (err, data) {
                    console.log('Error occurred: ' + err);
                    console.log('Artist: ' + data.tracks.items[0].artists[0].name);
                    console.log('Song Name: ' + data.tracks.items[0].name);
                    console.log('Album: ' + data.tracks.items[0].album.name);
                    console.log('Link to track: ' + data.tracks.items[0].external_urls.spotify);
                });
              }
            
            if (data.tracks.items[0].name) {
                var info = data.tracks.items[0];
                console.log('Artist: ' + data.tracks.items[0].artists[0].name);
                console.log('Song Name: ' + data.tracks.items[0].name);
                console.log('Album: ' + data.tracks.items[0].album.name);
                console.log('Link to track: ' + data.tracks.items[0].external_urls.spotify);
              }
            
        })

    }

}

// if (process.argv[2] === 'movie-this') {
//     if (process.argv[3]) {
//         var movSearch = process.argv[3];
//     } else {
        
//     }
// }