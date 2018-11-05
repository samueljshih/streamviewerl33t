var axios = require('axios');
var credentials = 'AIzaSyAzK3f8em68SDXru4Hws7PbnYb6LKA1sBw';

var searchYoutubeStreams = (query, callback) => {
  axios
    .get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: 'AIzaSyAzK3f8em68SDXru4Hws7PbnYb6LKA1sBw',
        q: query,
        maxResults: 5,
        type: 'video',
        eventType: 'live'
      }
    })
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.log('ERROR', err);
    });
};

module.exports = searchYoutubeStreams;
