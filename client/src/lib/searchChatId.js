var axios = require('axios');
var credentials = 'AIzaSyAzK3f8em68SDXru4Hws7PbnYb6LKA1sBw';

var searchChatId = (videoId, callback) => {
  axios
    .get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'liveStreamingDetails',
        key: credentials,
        id: videoId,
        maxResults: 5
      }
    })
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.log('ERROR', err);
    });
};

module.exports = searchChatId;
