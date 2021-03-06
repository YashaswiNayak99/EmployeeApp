var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
require('./app_api/models/db');

var routesApi = require('./app_api/index');
//var routes = require('./app/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_api', 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/api',routesApi);
//app.use('/',routes);
// require('./app_api/models/db');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.status);
  console.log(err.message);
});

//module.exports = app;
var port = process.env.PORT || 8080;
app.listen(port,function(){
  console.log('Listening on : ',port);
});