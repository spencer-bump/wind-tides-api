const express = require('express');
const router = express.Router();

const parseTides = require('../parseTides');


const NEW_MOCK_TIDE_DATA = JSON.parse('{"disclaimer": "NOT SUITABLE FOR NAVIGATIONAL PURPOSES. API Hood does not warrant that the provided data will be free from errors or omissions. Provided data are NOT suitable for usage where someone could be harmed or suffer any damage.", "status": 200, "latitude": 20.9030556, "longitude": -156.4430556, "origin": {"latitude": 20.9375, "longitude": -156.4375, "distance": 3.86, "unit": "km"}, "datums": {"LAT": -0.5082168197631836, "HAT": 0.5259302520751953}, "timestamp": 1625868411, "datetime": "2021-07-09T22:06:51+00:00", "unit": "m", "timezone": "UTC", "datum": "MSL", "extremes": [{"timestamp": 1625879294, "datetime": "2021-07-10T01:08:14+00:00", "height": 0.4021763352927218, "state": "HIGH TIDE"}, {"timestamp": 1625903796, "datetime": "2021-07-10T07:56:36+00:00", "height": -0.07554293957893934, "state": "LOW TIDE"}, {"timestamp": 1625917178, "datetime": "2021-07-10T11:39:38+00:00", "height": 0.018524003686890646, "state": "HIGH TIDE"}, {"timestamp": 1625940449, "datetime": "2021-07-10T18:07:29+00:00", "height": -0.4170811472935923, "state": "LOW TIDE"}], "heights": [{"timestamp": 1625868411, "datetime": "2021-07-09T22:06:51+00:00", "height": 0.11851951931334206, "state": "RISING"}, {"timestamp": 1625872011, "datetime": "2021-07-09T23:06:51+00:00", "height": 0.2685913154941613, "state": "RISING"}, {"timestamp": 1625875611, "datetime": "2021-07-10T00:06:51+00:00", "height": 0.36792345518624087, "state": "RISING"}, {"timestamp": 1625879211, "datetime": "2021-07-10T01:06:51+00:00", "height": 0.40215912443519375, "state": "RISING"}, {"timestamp": 1625882811, "datetime": "2021-07-10T02:06:51+00:00", "height": 0.3738382616247071, "state": "FALLING"}, {"timestamp": 1625886411, "datetime": "2021-07-10T03:06:51+00:00", "height": 0.2957400631314414, "state": "FALLING"}, {"timestamp": 1625890011, "datetime": "2021-07-10T04:06:51+00:00", "height": 0.1880378496261971, "state": "FALLING"}, {"timestamp": 1625893611, "datetime": "2021-07-10T05:06:51+00:00", "height": 0.07712061302101597, "state": "FALLING"}, {"timestamp": 1625897211, "datetime": "2021-07-10T06:06:51+00:00", "height": -0.011571004877103115, "state": "FALLING"}, {"timestamp": 1625900811, "datetime": "2021-07-10T07:06:51+00:00", "height": -0.0629635428469917, "state": "FALLING"}, {"timestamp": 1625904411, "datetime": "2021-07-10T08:06:51+00:00", "height": -0.07505254312922956, "state": "FALLING"}, {"timestamp": 1625908011, "datetime": "2021-07-10T09:06:51+00:00", "height": -0.055221817847802945, "state": "RISING"}, {"timestamp": 1625911611, "datetime": "2021-07-10T10:06:51+00:00", "height": -0.018317029128332035, "state": "RISING"}, {"timestamp": 1625915211, "datetime": "2021-07-10T11:06:51+00:00", "height": 0.012894483680623705, "state": "RISING"}, {"timestamp": 1625918811, "datetime": "2021-07-10T12:06:51+00:00", "height": 0.014212053798658046, "state": "RISING"}, {"timestamp": 1625922411, "datetime": "2021-07-10T13:06:51+00:00", "height": -0.026799638598851684, "state": "FALLING"}, {"timestamp": 1625926011, "datetime": "2021-07-10T14:06:51+00:00", "height": -0.10532799620357819, "state": "FALLING"}, {"timestamp": 1625929611, "datetime": "2021-07-10T15:06:51+00:00", "height": -0.20572987761640624, "state": "FALLING"}, {"timestamp": 1625933211, "datetime": "2021-07-10T16:06:51+00:00", "height": -0.30752770858657064, "state": "FALLING"}, {"timestamp": 1625936811, "datetime": "2021-07-10T17:06:51+00:00", "height": -0.38618228194223053, "state": "FALLING"}, {"timestamp": 1625940411, "datetime": "2021-07-10T18:06:51+00:00", "height": -0.4170774078938444, "state": "FALLING"}, {"timestamp": 1625944011, "datetime": "2021-07-10T19:06:51+00:00", "height": -0.38496493435783186, "state": "RISING"}, {"timestamp": 1625947611, "datetime": "2021-07-10T20:06:51+00:00", "height": -0.29009217120735764, "state": "RISING"}, {"timestamp": 1625951211, "datetime": "2021-07-10T21:06:51+00:00", "height": -0.1459603146719837, "state": "RISING"}], "copyright": "©2019 API Hood. Generated using AVISO+ Products."}');


router.get("/", (req, res, next) => {
  res.send(parseTides(NEW_MOCK_TIDE_DATA)).status(200);
});

module.exports = router;