//twitter 
const keys = require("./keys");

const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const request = require("request");


const fs = require("fs");


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
        spotify.search({ type: 'track', query: process.argv.slice(2) }, function (err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                console.log('Artist: ' + data.tracks.items[0].artists[0].name);
                console.log('Song Name: ' + data.tracks.items[0].name);
                console.log('Album: ' + data.tracks.items[0].album.name);
                console.log('Link to track: ' + data.tracks.items[0].external_urls.spotify);
                // console.join(' ,');
                // err = '';
              }
              return console.log('Error occurred: ' + err);
             
            

            
            for (var i = 0; i < data.tracks.items.length; i++) {
                console.log(data.tracks.items[i].name);
                if (trackname === "The Sign") {
                    var artists = [];
                    for (var j = 0; j <data.tracks.items[0].artists[0].name.length; j++) {
                        console.log(data.tracks.items[i].artists[j].name);
                        artists.push(data.tracks.items[0].artists[0].name);
                    }

                }
            }
            // for (var j = 0; j < data.tracks.items[i].artists[j].length; j++) {
            //     console.log(data.tracks.items[i].artists[j].name);

            // }
        })

    }

}

// spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
// .then(function(data) {
//   console.log('Artist information', data.body);
// }, function(err) {
//   console.error(err);
// });

// /* for (var i=0; i<data.length.items.length; i++){
//     if (trackname === "The Sign") {
//         var artists = [];
//         for (var j = 0; j < data.tracks.items[0].album.artists.length; j++) {

//         }
//     }
// }

// Do something with 'data'
// });


// var info = data.tracks.items[0];
// var artist = data.tracks.items[0].artists[0].name;
// var song = data.tracks.items[0].name;
// var album = data.tracks.items[0].album.name;
// var link = data.tracks.items[0].external_urls.spotify;
// switch (process.argv.splice[2]) {
//             case "spotify-this-song":
//                 liri.spotify();
//                 break;
//             case "movie-this":
//                 liri.movieThis();
//                 break;
//             case "do-what-it-says":
//                 liri.doWhatItSays();
//                 break;
//         }

// if (process.argv[2] === 'movie-this') {
//     if (process.argv[3]) {
//         var movSearch = process.argv[3];
//     } else {
        
//     }
// }