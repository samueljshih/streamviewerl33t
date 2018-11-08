const mongoose = require('mongoose');
var key = require('../config/mLabs');

mongoose.connect(key);

let chatSchema = mongoose.Schema({
  id: String,
  username: String,
  message: String,
  publishedAt: String
});
let Chat = mongoose.model('chats', chatSchema);

var db = mongoose.connection;

// Save chats to database
module.exports.saveChat = chat => {
  var newChat = new Chat({
    username: chat.username,
    message: chat.message,
    publishedAt: chat.publishedAt
  });

  // newChat.save(function(err, data) {
  //   if (err) return console.error(err);
  //   console.log('SAVED');
  // });
};

module.exports.getChats = () => {
  var promise = Chat.find({}, (err, data) => {
    // console.log('DATA', data);
  }).exec();
  return promise;
};
