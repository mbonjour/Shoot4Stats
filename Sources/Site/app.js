var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var http = require('http')
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy

passport.use(new Strategy({
  clientID: 'clientID',
  clientSecret: 'clientSecret',
  callbackURL: 'http://localhost:3000/api/login/facebook/return'
},
function (accessToken, refreshToken, profile, cb) {
  return cb(null, profile)
}))
passport.serializeUser(function (user, cb) {
  cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
  cb(null, obj)
})

var shoots = require(path.join(__dirname, 'api/controllers/shootsController.js'))
var ends = require(path.join(__dirname, 'api/controllers/endsController.js'))
var auth = require(path.join(__dirname, 'api/controllers/authController.js'))

var app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'static')))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/shoots', shoots)
app.use('/api/ends', ends)
app.use('/api/login', auth)

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  err.type = "Page not found"
  res.json(err)
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})