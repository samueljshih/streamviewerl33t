var axios = require('axios');
var credentials = 'AIzaSyAzK3f8em68SDXru4Hws7PbnYb6LKA1sBw';

var searchChatId = (chatId, callback) => {
  axios
    .get('https://www.googleapis.com/youtube/v3/liveChat/messages', {
      params: {
        part: 'snippet,id,authorDetails',
        key: credentials,
        liveChatId: chatId,
        maxResults: 200
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
