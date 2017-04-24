var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var http = require('http')
var middlewares = require('./api/middlewares')()

var shoots = require(path.join(__dirname, 'api/controllers/shootsController.js'))
var ends = require(path.join(__dirname, 'api/controllers/endsController.js'))
var auth = require(path.join(__dirname, 'api/controllers/authController.js'))
var users = require(path.join(__dirname, 'api/controllers/usersController.js'))

var app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
// app.use(express.static(path.join(__dirname, 'client')))

app.use(middlewares.passportFacebook.initialize())
app.use(middlewares.passportFacebook.session())

app.use('/api/users', users)
app.use('/api/shoots', shoots)
app.use('/api/ends', ends)
app.use('/api/login', auth)
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  err.type = "Page not found"
  res.json(err)
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})