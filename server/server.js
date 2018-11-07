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
  console.log('Chat REQUEST');
  response.end();
});

// POST
app.post('/chats', (request, response) => {
  var chat = request.body;
  mongo.saveChat(chat);
  response.send('Chat Successfully Saved');
});

app.listen(app.get('port'));
console.log('listening on port 3000....');
