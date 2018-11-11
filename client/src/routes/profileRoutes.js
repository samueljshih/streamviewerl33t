const router = require('express').Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    // User Not Login
    res.redirect('/auth/login');
  } else {
    // User Logged In
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.redirect('/', { user: req.user });
});

module.exports = router;
