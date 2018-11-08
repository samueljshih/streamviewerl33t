const express = require('express');
const parser = require('body-parser');
const app = express();
const mongo = require('../db/mongoDB');
// const sql = require('../db/databaseReqHandler.js');

app.set('port', 3000);

app.use(express.static('public'));
app.use(parser.json());

// GET
app.get('/chats', (request, response) => {
  var chats = mongo.getChats();
  chats.then(data => {
    response.send(data);
  });
});

// POST
app.post('/chats', (request, response) => {
  var chats = request.body;
  chats.forEach(chat => {
    var username = chat.authorDetails.displayName;
    var message = chat.snippet.displayMessage;
    var publishedAt = chat.snippet.publishedAt;
    var chat = {
      username: username,
      message: message,
      publishedAt: publishedAt
    };
    mongo.saveChat(chat);
  });
  response.send('');
});

app.listen(app.get('port'));
console.log('listening on port 3000....');
