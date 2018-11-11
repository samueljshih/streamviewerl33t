// Express Router
const router = require('express').Router();
const passport = require('passport');

// Auth Login
router.get('/login', (req, res) => {
  console.log('Auth Login Request');
  res.render('login');
});

// Auth Logout
router.get('/logout', (req, res) => {
  // Handle with passport
  res.send('Logging out');
});

// Auth with Google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

// Callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

module.exports = router;
