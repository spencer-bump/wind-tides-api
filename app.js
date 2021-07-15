const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter   = require('./routes/index');
const usersRouter   = require('./routes/users');
const weatherRouter = require('./routes/weatherApi');
const tidesRouter   = require('./routes/tidesApi');

const app = express();

const { DB_URL } = require('./env');

const Winds = mongoose.model('winds', {
  name: String,
  message: String
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/weatherApi', weatherRouter);
app.use('/tidesApi', tidesRouter);


mongoose.connect(DB_URL, error => {
  if (error) console.error(error)
  console.log('mongodb connection successful');
})

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
