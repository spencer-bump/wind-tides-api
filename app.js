const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const parseWeather = require('./parseWeather');

const indexRouter   = require('./routes/index');
const weatherRouter = require('./routes/weatherApi');
const tidesRouter   = require('./routes/tidesApi');


const app = express();

const { DB_URL, NEW_MOCK_WEATHER_DATA, NEW_MOCK_TIDE_DATA } = require('./env');

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  longitude: Number,
  latitude: Number,
  timezone: String,
  offset: Number,
  currently: Object,
  daily: Object,
  hourly: Object,
  flags: Object
});

const Weather = mongoose.model('winds', weatherSchema);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/weatherApi', weatherRouter);
app.use('/tidesApi', tidesRouter);


// *********
// Loads database with a record of a
// mock weather data that has been trimmed.
// *********
// const myWeather = new Weather(parseWeather(NEW_MOCK_WEATHER_DATA))

// myWeather.save( error => {
//   if (error) sendStatus(404)
// });


app.get('/winds', (req, res) => {
  console.log('weather requested')
  Weather.find({}, (error, weather) => {

    res.send(weather[weather.length-1])
  });
});



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
