var express = require('express')
var router = express.Router()
var passport = require('passport')
var store = require('../dal')(require('../../config/configs.json').db)
var responseHelper = require('../helpers/responseHelper')

router.get('/facebook/', function (req, res, next) {
  passport.authenticate(
    'facebook',
    { callbackURL: '/login/facebook/return/?url=' + req.query.url }
  )(req, res, next)
})

router.get('/facebook/return/', function (req, res, next) {
  passport.authenticate(
    'facebook',
    {
      callbackURL: "/login/facebook/return/?url=" + req.query.url,
      successRedirect: "/#/" + decodeURI(req.query.url),
      failureRedirect: "/#/"
    }
  )(req, res, next)
})

router.get('/me',
  function (req, res) {
    if (!req.user) {
      res.json({ logged: false })
    }
    else {
      res.json({
        logged: true,
        user: req.user
      })
    }
  })

module.exports = router