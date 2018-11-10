const express = require('express');
const parser = require('body-parser');
const app = express();
const mongo = require('../db/mongoDB');
const authRoutes = require('../client/src/routes/authRoutes');
const profileRoutes = require('../client/src/routes/profileRoutes');
const passportSetup = require('../client/src/config/passportSetup');
const cookieSession = require('cookie-session');
const keys = require('../client/src/config/keys');
const passport = require('passport');

app.set('port', 3000);
app.set('view engine', 'ejs');

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.use(parser.json());

// Auth Route
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

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
