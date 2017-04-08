var keys = require('./keys');
var Twitter = require('twitter');
var key = keys.twitterKeys.consumer_key;
var keySecret = keys.twitterKeys.consumer_secret;
var accessToken = keys.twitterKeys.access_token_key;
var accessSecret = keys.twitterKeys.access_token_secret;

var client = new Twitter({
  consumer_key: key,
  consumer_secret: keySecret,
  access_token_key: accessToken,
  access_token_secret: accessSecret
});

console.log(client);

//liri should take in one of [my-tweets, spotify-this-song, movie-this, do-what-it-says]

//`node liri.js my-tweets
//Shows your last 20 tweets and when they were created at, in your terminal/bash window/

var arg = process.argv[2];

if (arg === 'favs') {
    console.log('yasss');
    //getting favorites
    var favs = client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error;
        console.log(tweets);  // The favorites. 
        console.log(response);  // Raw response object. 
});
} 
else if (arg === 'tweets') {
        console.log('mahh tweets!');
} else {
    console.log('there\'s nothing here');
}

//`node liri.js spotify-this-song
//Shows the following informationa bout the song in your terminal/bash window
//  [Artist(s), Song title, album, if no song is provided then default is "The Sign" by Ace of Base]

// client.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);



//DOES THIS GO HERE????






