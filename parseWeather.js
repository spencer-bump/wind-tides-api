const parseWeather = data => {
  let weather = {};
  weather.currently = {};
  weather.daily = {};
  weather.daily.data = [];
  weather.hourly = {};
  weather.hourly.data = [];
  weather.flags = {};
  weather.flags.sources = [];

  weather.longitude   = data.longitude;
  weather.latitude    = data.latitude;
  weather.timezone    = data.timezone;
  weather.offset      = data.offset;

  weather.currently.time        = data.currently.time;
  weather.currently.summary     = data.currently.summary;
  weather.currently.temperature = data.currently.temperature;
  weather.currently.uvIndex     = data.currently.uvIndex;
  weather.currently.windBearing = data.currently.windBearing;
  weather.currently.windGust    = data.currently.windGust;
  weather.currently.windSpeed   = data.currently.windSpeed;

  weather.flags.units           = data.flags.units;
  weather.flags["nearest-station"] = data.flags["nearest-station"];
  weather.flags.sources         = data.flags.sources;

  for (let i = 0, len = data.daily.data.length; i < len; i++) {
    weather.daily.data.push({
      time:             data.daily.data[i].time,
      summary:          data.daily.data[i].summary,
      temperatureMax:   data.daily.data[i].temperatureMax,
      temperatureMin:   data.daily.data[i].temperatureMin,
      uvIndex:          data.daily.data[i].uvIndex,
      windBearing:      data.daily.data[i].windBearing,
      windGust:        data.daily.data[i].windGust,
      windSpeed:       data.daily.data[i].windSpeed,
      moonPhase:       data.daily.data[i].moonPhase
    });
  }

  for (let i = 0, len = 24; i < len; i++) {
    weather.hourly.data.push({
      time:         data.hourly.data[i].time,
      summary:      data.hourly.data[i].summary,
      temperature:  data.hourly.data[i].temperature,
      uvIndex:      data.hourly.data[i].uvIndex,
      windBearing:  data.hourly.data[i].windBearing,
      windGust:     data.hourly.data[i].windGust,
      windSpeed:    data.hourly.data[i].windSpeed
    });
  }

  return weather;
}


module.exports = parseWeather;
