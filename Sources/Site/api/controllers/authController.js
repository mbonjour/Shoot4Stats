var express = require('express')
var router = express.Router()
var passport = require('passport')
var store = require('../dal')(require('../../config/configs.json').db)
var responseHelper = require('../helpers/responseHelper')

router.get('/facebook', function (req, res, next) {
  req.session.url = req.query.url;
  next();
}, passport.authenticate('facebook'));

router.get('/facebook/return', passport.authenticate(
  'facebook', {
    failureRedirect: '/#/'
  }
), function (req, res) {
  res.redirect('/#' + req.session.url || '/#/');
  delete req.session.url;
});

router.get('/me',
  function (req, res) {
    if (!req.user) {
      res.json({
        logged: false
      })
    } else {
      res.json({
        logged: true,
        user: req.user
      })
    }
  }
)

module.exports = router