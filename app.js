const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose')

/*
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var eventsRouter = require('./routes/events');
var galleryRouter = require('./routes/gallery');
*/

const app = express();

// url encoding 
app.use(express.urlencoded({ extended: false }));

// user cookie
app.use(cookieParser());

//for assets
app.use(express.static(path.join(__dirname, 'assets')));

// for  layouts
app.use(expressLayouts);

//For Script and CSS
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

// user express route

app.use('/', require('./routes/index')) ; 


//Set up view engine : install ejs 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//logger and json

app.use(logger('dev'));
app.use(express.json());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
