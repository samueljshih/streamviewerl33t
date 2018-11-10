const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  username: String,
  googleId: String
});

// Create User Model
var User = mongoose.model('user', UserSchema);

module.exports = User;
