// Express Router
const router = require('express').Router();

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
router.get('/google', (req, res) => {
  // Handle with Passport
  res.send('Logging in with google');
});

module.exports = router;
