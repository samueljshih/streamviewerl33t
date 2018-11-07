const mongoose = require('mongoose');
var key = require('../config/mLabs');

mongoose.connect(key);

let chatSchema = mongoose.Schema({
  id: String,
  chat: String
});
let Chat = mongoose.model('chats', chatSchema);

var db = mongoose.connection;

// Save chats to database
module.exports.saveChat = chat => {
  console.log('CHAT', chat);
  var newChat = new Chat({ chat: chat.message });
  newChat.save(function(err, data) {
    if (err) return console.error(err);
    console.log('SAVED');
  });
};
