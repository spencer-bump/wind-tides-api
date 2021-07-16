const parseTides = data => {
  let tides = {};
  tides.timestamp  = data.timestamp;
  tides.latitude  = data.latitude;
  tides.longitude  = data.longitude;
  tides.copyright  = data.copyright;
  tides.disclaimer  = data.disclaimer;
  tides.timezone  = data.timezone;
  tides.unit  = data.unit;
  tides.extremes = data.extremes;
  tides.heights = data.heights;
  return tides
}

module.exports = parseTides;
