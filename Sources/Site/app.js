var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var shoot = require(path.join(__dirname, 'api/controllers/shoot.js'));

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/shoots', shoot);

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})