const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios')

const parseWeather = require('./parseWeather');
const { DB_URL, NEW_MOCK_WEATHER_DATA, NEW_MOCK_TIDE_DATA } = require('./env');
const { DARKSKY_KEY, TIDES_KEY } = require('./config/keys');

const indexRouter   = require('./routes/index');
const weatherRouter = require('./routes/weatherApi');
const tidesRouter   = require('./routes/tidesApi');


const app = express();



// Mongoose Database
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
const darkskyIntervalTime = 0.1*60*1000;  // 30 sec

const saveToDb = data => {
  const myWeather = new Weather(parseWeather(data))
   myWeather.save( error => {
     if (error) sendStatus(404)
     console.log(`Darksy data saved to db.\n`)
   });
}
// End Mongoose Database


// Socket IO
const http = require('http');
const server = http.createServer(app);
const socketIo = require('socket.io');

// Socket.io
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let num = 0;
const getApiAndEmit = socket => {
  num = num + 3;
  socket.emit("darksky", num);
};

let ioInterval;
io.on("connection", (socket) => {
  console.log("New client connected");
  if (ioInterval) {
    clearInterval(ioInterval);
  }
  getApiAndEmit(socket)
  ioInterval = setInterval(() => getApiAndEmit(socket), 3000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(ioInterval);
  });
});
// End Socket IO




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
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



// https://api.darksky.net/forecast/e7957368598085b5004df129bb5d6dbf/37.8267,-122.4233

// const darkskyIntervalTime = 0.1*60*1000;  // 30 sec

// const saveToDb = data => {
//   const myWeather = new Weather(parseWeather(data))
//    myWeather.save( error => {
//      if (error) sendStatus(404)
//      console.log(`Darksy data saved to db.\n`)
//    });
// }

// let darkskyInterval;
// darkskyInterval = setInterval(() => {
//    console.log(`Wait for ${darkskyIntervalTime/1000} seconds...`)
//    axios.get(`https://api.darksky.net/forecast/${DARKSKY_KEY}/20.89249643,-156.4249983?exclude=[minutely]`)
//       .then(response => {
//         saveToDb(response.data);
//       })
//       .catch(error => console.log('Error to fetch darksky data\n'))
// }, darkskyIntervalTime);


app.get('/winds', (req, res) => {
  console.log('weather requested')
  Weather.find({}, (error, weather) => {
    res.send(weather[weather.length-1]);
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

module.exports = { "app": app, "server": server};
