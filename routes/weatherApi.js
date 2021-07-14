const express = require('express');
const router = express.Router();

const NEW_MOCK_WEATHER_DATA = JSON.parse('{"latitude":20.89249643,"longitude":-156.4249983,"timezone":"Pacific/Honolulu","currently":{"time":1625870291,"summary":"Partly Cloudy","icon":"partly-cloudy-day","nearestStormDistance":14,"nearestStormBearing":220,"precipIntensity":0,"precipProbability":0,"temperature":86.38,"apparentTemperature":88.58,"dewPoint":65.81,"humidity":0.5,"pressure":1015.5,"windSpeed":23.36,"windGust":30.06,"windBearing":42,"cloudCover":0.48,"uvIndex":9,"visibility":10,"ozone":283.6},"hourly":{"summary":"Humid and mostly cloudy throughout the day.","icon":"partly-cloudy-day","data":[{"time":1625868000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":86.16,"apparentTemperature":88.3,"dewPoint":65.68,"humidity":0.51,"pressure":1015.8,"windSpeed":23.38,"windGust":29.93,"windBearing":43,"cloudCover":0.47,"uvIndex":9,"visibility":10,"ozone":284},{"time":1625871600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0006,"precipProbability":0.02,"precipType":"rain","temperature":86.35,"apparentTemperature":88.61,"dewPoint":65.91,"humidity":0.51,"pressure":1015.4,"windSpeed":22.95,"windGust":29.62,"windBearing":42,"cloudCover":0.47,"uvIndex":9,"visibility":10,"ozone":283.3},{"time":1625875200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0008,"precipProbability":0.03,"precipType":"rain","temperature":85.22,"apparentTemperature":88.08,"dewPoint":67.15,"humidity":0.55,"pressure":1015.1,"windSpeed":21.64,"windGust":27.89,"windBearing":44,"cloudCover":0.43,"uvIndex":8,"visibility":10,"ozone":282.8},{"time":1625878800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0012,"precipProbability":0.03,"precipType":"rain","temperature":80.42,"apparentTemperature":84.36,"dewPoint":71.77,"humidity":0.75,"pressure":1015.1,"windSpeed":15.06,"windGust":18.81,"windBearing":59,"cloudCover":0.53,"uvIndex":6,"visibility":10,"ozone":283.2},{"time":1625882400,"summary":"Humid and Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0026,"precipProbability":0.05,"precipType":"rain","temperature":79.8,"apparentTemperature":84.13,"dewPoint":74.06,"humidity":0.83,"pressure":1014.9,"windSpeed":11.08,"windGust":13.05,"windBearing":79,"cloudCover":0.55,"uvIndex":4,"visibility":10,"ozone":283.4},{"time":1625886000,"summary":"Humid and Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0039,"precipProbability":0.07,"precipType":"rain","temperature":79,"apparentTemperature":82.4,"dewPoint":73.34,"humidity":0.83,"pressure":1015,"windSpeed":11.42,"windGust":13.74,"windBearing":78,"cloudCover":0.59,"uvIndex":2,"visibility":10,"ozone":283},{"time":1625889600,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.004,"precipProbability":0.09,"precipType":"rain","temperature":78.43,"apparentTemperature":79.86,"dewPoint":72.78,"humidity":0.83,"pressure":1015.3,"windSpeed":11.73,"windGust":14.08,"windBearing":79,"cloudCover":0.62,"uvIndex":0,"visibility":10,"ozone":283.5},{"time":1625893200,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0036,"precipProbability":0.11,"precipType":"rain","temperature":82.36,"apparentTemperature":87.77,"dewPoint":72.72,"humidity":0.73,"pressure":1015.7,"windSpeed":11.72,"windGust":14.32,"windBearing":80,"cloudCover":0.64,"uvIndex":0,"visibility":10,"ozone":283.4},{"time":1625896800,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0028,"precipProbability":0.1,"precipType":"rain","temperature":79.15,"apparentTemperature":82.52,"dewPoint":72.58,"humidity":0.8,"pressure":1016.2,"windSpeed":11.61,"windGust":14.81,"windBearing":79,"cloudCover":0.72,"uvIndex":0,"visibility":10,"ozone":281.9},{"time":1625900400,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0022,"precipProbability":0.1,"precipType":"rain","temperature":76.43,"apparentTemperature":77.85,"dewPoint":72.19,"humidity":0.87,"pressure":1016.8,"windSpeed":11.37,"windGust":14.25,"windBearing":80,"cloudCover":0.79,"uvIndex":0,"visibility":10,"ozone":282.8},{"time":1625904000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.002,"precipProbability":0.09,"precipType":"rain","temperature":74.08,"apparentTemperature":75.55,"dewPoint":71.88,"humidity":0.93,"pressure":1017.3,"windSpeed":10.88,"windGust":13.54,"windBearing":83,"cloudCover":0.8,"uvIndex":0,"visibility":10,"ozone":283.8},{"time":1625907600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0019,"precipProbability":0.09,"precipType":"rain","temperature":72.03,"apparentTemperature":73.59,"dewPoint":71.81,"humidity":0.99,"pressure":1017.5,"windSpeed":10.37,"windGust":12.74,"windBearing":87,"cloudCover":0.79,"uvIndex":0,"visibility":10,"ozone":284},{"time":1625911200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0016,"precipProbability":0.08,"precipType":"rain","temperature":70.27,"apparentTemperature":71.95,"dewPoint":70.27,"humidity":1,"pressure":1017.2,"windSpeed":10,"windGust":12.23,"windBearing":88,"cloudCover":0.74,"uvIndex":0,"visibility":10,"ozone":284.7},{"time":1625914800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0015,"precipProbability":0.08,"precipType":"rain","temperature":69.01,"apparentTemperature":70.75,"dewPoint":69.01,"humidity":1,"pressure":1016.6,"windSpeed":9.5,"windGust":11.7,"windBearing":90,"cloudCover":0.81,"uvIndex":0,"visibility":10,"ozone":284.1},{"time":1625918400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0016,"precipProbability":0.07,"precipType":"rain","temperature":68.42,"apparentTemperature":70.22,"dewPoint":68.42,"humidity":1,"pressure":1016.2,"windSpeed":9.1,"windGust":10.85,"windBearing":90,"cloudCover":0.83,"uvIndex":0,"visibility":10,"ozone":283.1},{"time":1625922000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0014,"precipProbability":0.07,"precipType":"rain","temperature":68.32,"apparentTemperature":70.19,"dewPoint":68.32,"humidity":1,"pressure":1016,"windSpeed":9.26,"windGust":10.91,"windBearing":91,"cloudCover":0.69,"uvIndex":0,"visibility":10,"ozone":282.9},{"time":1625925600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0015,"precipProbability":0.07,"precipType":"rain","temperature":68.74,"apparentTemperature":70.7,"dewPoint":68.74,"humidity":1,"pressure":1015.9,"windSpeed":9.67,"windGust":11.41,"windBearing":92,"cloudCover":0.73,"uvIndex":0,"visibility":10,"ozone":283.1},{"time":1625929200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0016,"precipProbability":0.07,"precipType":"rain","temperature":70.01,"apparentTemperature":71.95,"dewPoint":70.01,"humidity":1,"pressure":1016.1,"windSpeed":10.18,"windGust":12.25,"windBearing":93,"cloudCover":0.7,"uvIndex":0,"visibility":10,"ozone":282.8},{"time":1625932800,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0013,"precipProbability":0.06,"precipType":"rain","temperature":72.24,"apparentTemperature":74.09,"dewPoint":72.24,"humidity":1,"pressure":1016.5,"windSpeed":10.63,"windGust":13.07,"windBearing":92,"cloudCover":0.68,"uvIndex":0,"visibility":10,"ozone":282.9},{"time":1625936400,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.001,"precipProbability":0.06,"precipType":"rain","temperature":76.02,"apparentTemperature":77.72,"dewPoint":74.05,"humidity":0.94,"pressure":1017,"windSpeed":11.34,"windGust":14.31,"windBearing":90,"cloudCover":0.8,"uvIndex":0,"visibility":10,"ozone":283.6},{"time":1625940000,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.001,"precipProbability":0.05,"precipType":"rain","temperature":80.81,"apparentTemperature":86.22,"dewPoint":74.5,"humidity":0.81,"pressure":1017.3,"windSpeed":12.04,"windGust":15.2,"windBearing":87,"cloudCover":0.77,"uvIndex":2,"visibility":10,"ozone":282.6},{"time":1625943600,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.001,"precipProbability":0.04,"precipType":"rain","temperature":78.21,"apparentTemperature":79.99,"dewPoint":75.24,"humidity":0.91,"pressure":1017.3,"windSpeed":12.71,"windGust":15.62,"windBearing":84,"cloudCover":0.78,"uvIndex":3,"visibility":10,"ozone":282.5},{"time":1625947200,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0013,"precipProbability":0.04,"precipType":"rain","temperature":79.74,"apparentTemperature":84.73,"dewPoint":76.01,"humidity":0.88,"pressure":1017.2,"windSpeed":13.66,"windGust":16.15,"windBearing":84,"cloudCover":0.83,"uvIndex":5,"visibility":10,"ozone":282.6},{"time":1625950800,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0014,"precipProbability":0.04,"precipType":"rain","temperature":80.79,"apparentTemperature":87.68,"dewPoint":76.74,"humidity":0.88,"pressure":1016.9,"windSpeed":14.83,"windGust":17.21,"windBearing":86,"cloudCover":0.82,"uvIndex":6,"visibility":10,"ozone":283},{"time":1625954400,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.001,"precipProbability":0.04,"precipType":"rain","temperature":81.21,"apparentTemperature":88.45,"dewPoint":76.77,"humidity":0.86,"pressure":1016.8,"windSpeed":15.03,"windGust":18.09,"windBearing":85,"cloudCover":0.78,"uvIndex":7,"visibility":10,"ozone":282},{"time":1625958000,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0007,"precipProbability":0.03,"precipType":"rain","temperature":80.96,"apparentTemperature":87.64,"dewPoint":76.36,"humidity":0.86,"pressure":1016.3,"windSpeed":15.17,"windGust":18.81,"windBearing":89,"cloudCover":0.72,"uvIndex":7,"visibility":10,"ozone":280.8},{"time":1625961600,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0007,"precipProbability":0.04,"precipType":"rain","temperature":81.16,"apparentTemperature":88.73,"dewPoint":77.13,"humidity":0.88,"pressure":1016.1,"windSpeed":14.91,"windGust":18.76,"windBearing":92,"cloudCover":0.69,"uvIndex":7,"visibility":10,"ozone":279.8},{"time":1625965200,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0011,"precipProbability":0.05,"precipType":"rain","temperature":80.68,"apparentTemperature":87.49,"dewPoint":76.74,"humidity":0.88,"pressure":1015.9,"windSpeed":14.89,"windGust":18.67,"windBearing":91,"cloudCover":0.64,"uvIndex":6,"visibility":10,"ozone":279.9},{"time":1625968800,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0017,"precipProbability":0.06,"precipType":"rain","temperature":80.28,"apparentTemperature":86.08,"dewPoint":75.93,"humidity":0.87,"pressure":1015.8,"windSpeed":14.76,"windGust":18.75,"windBearing":90,"cloudCover":0.64,"uvIndex":4,"visibility":10,"ozone":280.4},{"time":1625972400,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0021,"precipProbability":0.07,"precipType":"rain","temperature":79.69,"apparentTemperature":84.18,"dewPoint":74.77,"humidity":0.85,"pressure":1016,"windSpeed":14.51,"windGust":18.51,"windBearing":90,"cloudCover":0.64,"uvIndex":2,"visibility":10,"ozone":281.4},{"time":1625976000,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0021,"precipProbability":0.08,"precipType":"rain","temperature":78.93,"apparentTemperature":82.4,"dewPoint":73.92,"humidity":0.85,"pressure":1016.5,"windSpeed":14.26,"windGust":17.79,"windBearing":93,"cloudCover":0.64,"uvIndex":0,"visibility":10,"ozone":281.2},{"time":1625979600,"summary":"Humid and Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.002,"precipProbability":0.08,"precipType":"rain","temperature":82.96,"apparentTemperature":89.25,"dewPoint":73.6,"humidity":0.73,"pressure":1017.1,"windSpeed":13.93,"windGust":17.17,"windBearing":90,"cloudCover":0.54,"uvIndex":0,"visibility":10,"ozone":281.7},{"time":1625983200,"summary":"Humid and Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0019,"precipProbability":0.07,"precipType":"rain","temperature":79.49,"apparentTemperature":83.35,"dewPoint":73.42,"humidity":0.82,"pressure":1017.8,"windSpeed":13.59,"windGust":17.24,"windBearing":89,"cloudCover":0.47,"uvIndex":0,"visibility":10,"ozone":282},{"time":1625986800,"summary":"Humid and Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0015,"precipProbability":0.07,"precipType":"rain","temperature":76.61,"apparentTemperature":78.13,"dewPoint":72.97,"humidity":0.89,"pressure":1018.3,"windSpeed":13.74,"windGust":17.24,"windBearing":82,"cloudCover":0.46,"uvIndex":0,"visibility":10,"ozone":281.4},{"time":1625990400,"summary":"Humid and Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0019,"precipProbability":0.08,"precipType":"rain","temperature":74.19,"apparentTemperature":75.73,"dewPoint":72.43,"humidity":0.94,"pressure":1018.7,"windSpeed":13.82,"windGust":17.74,"windBearing":79,"cloudCover":0.48,"uvIndex":0,"visibility":10,"ozone":281.7},{"time":1625994000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0021,"precipProbability":0.08,"precipType":"rain","temperature":72.18,"apparentTemperature":73.77,"dewPoint":71.98,"humidity":0.99,"pressure":1018.8,"windSpeed":14.05,"windGust":17.93,"windBearing":78,"cloudCover":0.58,"uvIndex":0,"visibility":10,"ozone":282.1},{"time":1625997600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0014,"precipProbability":0.07,"precipType":"rain","temperature":70.62,"apparentTemperature":72.24,"dewPoint":70.62,"humidity":1,"pressure":1018.4,"windSpeed":13.96,"windGust":17.77,"windBearing":78,"cloudCover":0.61,"uvIndex":0,"visibility":10,"ozone":282.9},{"time":1626001200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.001,"precipProbability":0.07,"precipType":"rain","temperature":69.69,"apparentTemperature":71.29,"dewPoint":69.69,"humidity":1,"pressure":1017.7,"windSpeed":13.49,"windGust":17.3,"windBearing":78,"cloudCover":0.61,"uvIndex":0,"visibility":10,"ozone":282.6},{"time":1626004800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.001,"precipProbability":0.06,"precipType":"rain","temperature":69.26,"apparentTemperature":70.89,"dewPoint":69.26,"humidity":1,"pressure":1017.1,"windSpeed":13.4,"windGust":17.02,"windBearing":78,"cloudCover":0.73,"uvIndex":0,"visibility":10,"ozone":281.3},{"time":1626008400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0011,"precipProbability":0.06,"precipType":"rain","temperature":69.49,"apparentTemperature":71.19,"dewPoint":69.49,"humidity":1,"pressure":1016.9,"windSpeed":13.39,"windGust":16.9,"windBearing":76,"cloudCover":0.78,"uvIndex":0,"visibility":10,"ozone":280.7},{"time":1626012000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0016,"precipProbability":0.07,"precipType":"rain","temperature":70.25,"apparentTemperature":72.01,"dewPoint":70.25,"humidity":1,"pressure":1016.9,"windSpeed":13.53,"windGust":17.39,"windBearing":76,"cloudCover":0.82,"uvIndex":0,"visibility":10,"ozone":281.2},{"time":1626015600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0023,"precipProbability":0.08,"precipType":"rain","temperature":71.77,"apparentTemperature":73.49,"dewPoint":71.77,"humidity":1,"pressure":1017,"windSpeed":13.81,"windGust":17.79,"windBearing":75,"cloudCover":0.8,"uvIndex":0,"visibility":10,"ozone":281.7},{"time":1626019200,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0026,"precipProbability":0.08,"precipType":"rain","temperature":73.84,"apparentTemperature":75.45,"dewPoint":72.72,"humidity":0.96,"pressure":1017.2,"windSpeed":14.33,"windGust":18.97,"windBearing":76,"cloudCover":0.78,"uvIndex":0,"visibility":10,"ozone":282.4},{"time":1626022800,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0026,"precipProbability":0.07,"precipType":"rain","temperature":76.94,"apparentTemperature":78.46,"dewPoint":72.98,"humidity":0.88,"pressure":1017.7,"windSpeed":14.84,"windGust":19.65,"windBearing":77,"cloudCover":0.82,"uvIndex":0,"visibility":10,"ozone":283.2},{"time":1626026400,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0028,"precipProbability":0.07,"precipType":"rain","temperature":80.92,"apparentTemperature":85.83,"dewPoint":73.31,"humidity":0.78,"pressure":1018,"windSpeed":15.16,"windGust":19.78,"windBearing":76,"cloudCover":0.84,"uvIndex":2,"visibility":10,"ozone":283.9},{"time":1626030000,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0019,"precipProbability":0.05,"precipType":"rain","temperature":77.22,"apparentTemperature":78.78,"dewPoint":73.44,"humidity":0.88,"pressure":1017.9,"windSpeed":15.24,"windGust":19.72,"windBearing":75,"cloudCover":0.84,"uvIndex":3,"visibility":10,"ozone":284.4},{"time":1626033600,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0008,"precipProbability":0.03,"precipType":"rain","temperature":78.4,"apparentTemperature":79.9,"dewPoint":73.29,"humidity":0.84,"pressure":1017.6,"windSpeed":14.88,"windGust":19.15,"windBearing":76,"cloudCover":0.82,"uvIndex":5,"visibility":10,"ozone":285.2},{"time":1626037200,"summary":"Humid and Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0006,"precipProbability":0.02,"precipType":"rain","temperature":79.36,"apparentTemperature":82.87,"dewPoint":72.56,"humidity":0.8,"pressure":1017.3,"windSpeed":14.64,"windGust":18.73,"windBearing":74,"cloudCover":0.72,"uvIndex":6,"visibility":10,"ozone":285.3},{"time":1626040800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0003,"precipProbability":0.02,"precipType":"rain","temperature":80.23,"apparentTemperature":84.14,"dewPoint":71.97,"humidity":0.76,"pressure":1017.1,"windSpeed":14.72,"windGust":19.09,"windBearing":75,"cloudCover":0.78,"uvIndex":6,"visibility":10,"ozone":285}]},"daily":{"summary":"No precipitation throughout the week.","icon":"clear-day","data":[{"time":1625824800,"summary":"Humid and partly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1625845920,"sunsetTime":1625893920,"moonPhase":0.01,"precipIntensity":0.0011,"precipIntensityMax":0.0041,"precipIntensityMaxTime":1625887800,"precipProbability":0.15,"precipType":"rain","temperatureHigh":86.89,"temperatureHighTime":1625870820,"temperatureLow":67.8,"temperatureLowTime":1625920980,"apparentTemperatureHigh":88.61,"apparentTemperatureHighTime":1625871240,"apparentTemperatureLow":70.14,"apparentTemperatureLowTime":1625920440,"dewPoint":67.34,"humidity":0.73,"pressure":1015.9,"windSpeed":11.83,"windGust":30.27,"windGustTime":1625869140,"windBearing":62,"cloudCover":0.39,"uvIndex":9,"uvIndexTime":1625865240,"visibility":10,"ozone":284.3,"temperatureMin":65.7,"temperatureMinTime":1625844720,"temperatureMax":86.89,"temperatureMaxTime":1625870820,"apparentTemperatureMin":66.56,"apparentTemperatureMinTime":1625844720,"apparentTemperatureMax":88.61,"apparentTemperatureMaxTime":1625871240},{"time":1625911200,"summary":"Humid and mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1625932380,"sunsetTime":1625980320,"moonPhase":0.04,"precipIntensity":0.0015,"precipIntensityMax":0.0021,"precipIntensityMaxTime":1625975280,"precipProbability":0.25,"precipType":"rain","temperatureHigh":83.46,"temperatureHighTime":1625979600,"temperatureLow":68.76,"temperatureLowTime":1626005280,"apparentTemperatureHigh":89.25,"apparentTemperatureHighTime":1625979600,"apparentTemperatureLow":70.89,"apparentTemperatureLowTime":1626004980,"dewPoint":73.34,"humidity":0.91,"pressure":1016.9,"windSpeed":12.81,"windGust":18.85,"windGustTime":1625959020,"windBearing":88,"cloudCover":0.68,"uvIndex":7,"uvIndexTime":1625958120,"visibility":10,"ozone":282.1,"temperatureMin":67.8,"temperatureMinTime":1625920980,"temperatureMax":83.46,"temperatureMaxTime":1625979660,"apparentTemperatureMin":70.14,"apparentTemperatureMinTime":1625920440,"apparentTemperatureMax":89.26,"apparentTemperatureMaxTime":1625979660},{"time":1625997600,"summary":"Humid and mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1626018780,"sunsetTime":1626066720,"moonPhase":0.07,"precipIntensity":0.0019,"precipIntensityMax":0.0043,"precipIntensityMaxTime":1626059340,"precipProbability":0.28,"precipType":"rain","temperatureHigh":83.08,"temperatureHighTime":1626066000,"temperatureLow":69.28,"temperatureLowTime":1626091740,"apparentTemperatureHigh":87.93,"apparentTemperatureHighTime":1626066000,"apparentTemperatureLow":71.69,"apparentTemperatureLowTime":1626091020,"dewPoint":72.13,"humidity":0.87,"pressure":1017,"windSpeed":14.09,"windGust":19.79,"windGustTime":1626027960,"windBearing":75,"cloudCover":0.8,"uvIndex":7,"uvIndexTime":1626044340,"visibility":10,"ozone":283.3,"temperatureMin":68.76,"temperatureMinTime":1626005280,"temperatureMax":83.09,"temperatureMaxTime":1626066060,"apparentTemperatureMin":70.89,"apparentTemperatureMinTime":1626004980,"apparentTemperatureMax":87.96,"apparentTemperatureMaxTime":1626066180},{"time":1626084000,"summary":"Humid and mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1626105180,"sunsetTime":1626153120,"moonPhase":0.11,"precipIntensity":0.0024,"precipIntensityMax":0.0067,"precipIntensityMaxTime":1626103080,"precipProbability":0.33,"precipType":"rain","temperatureHigh":83.18,"temperatureHighTime":1626152400,"temperatureLow":69.45,"temperatureLowTime":1626175140,"apparentTemperatureHigh":88.38,"apparentTemperatureHighTime":1626152400,"apparentTemperatureLow":71.55,"apparentTemperatureLowTime":1626175140,"dewPoint":73.39,"humidity":0.9,"pressure":1016.2,"windSpeed":13.77,"windGust":20.88,"windGustTime":1626144840,"windBearing":82,"cloudCover":0.81,"uvIndex":7,"uvIndexTime":1626127380,"visibility":10,"ozone":285.2,"temperatureMin":69.28,"temperatureMinTime":1626091740,"temperatureMax":83.19,"temperatureMaxTime":1626152520,"apparentTemperatureMin":71.69,"apparentTemperatureMinTime":1626091020,"apparentTemperatureMax":88.4,"apparentTemperatureMaxTime":1626152520},{"time":1626170400,"summary":"Humid and mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1626191640,"sunsetTime":1626239460,"moonPhase":0.14,"precipIntensity":0.0011,"precipIntensityMax":0.0031,"precipIntensityMaxTime":1626177780,"precipProbability":0.21,"precipType":"rain","temperatureHigh":83.9,"temperatureHighTime":1626238800,"temperatureLow":69.22,"temperatureLowTime":1626261900,"apparentTemperatureHigh":87.9,"apparentTemperatureHighTime":1626199200,"apparentTemperatureLow":71.4,"apparentTemperatureLowTime":1626262200,"dewPoint":71.67,"humidity":0.84,"pressure":1016.2,"windSpeed":11.72,"windGust":19.16,"windGustTime":1626256800,"windBearing":75,"cloudCover":0.8,"uvIndex":8,"uvIndexTime":1626214620,"visibility":10,"ozone":287.6,"temperatureMin":69.45,"temperatureMinTime":1626175140,"temperatureMax":83.91,"temperatureMaxTime":1626238920,"apparentTemperatureMin":71.55,"apparentTemperatureMinTime":1626175140,"apparentTemperatureMax":87.9,"apparentTemperatureMaxTime":1626199200},{"time":1626256800,"summary":"Humid and partly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1626278040,"sunsetTime":1626325860,"moonPhase":0.17,"precipIntensity":0.0024,"precipIntensityMax":0.0094,"precipIntensityMaxTime":1626339600,"precipProbability":0.26,"precipType":"rain","temperatureHigh":83.48,"temperatureHighTime":1626307740,"temperatureLow":70.01,"temperatureLowTime":1626353040,"apparentTemperatureHigh":89.14,"apparentTemperatureHighTime":1626285420,"apparentTemperatureLow":72.22,"apparentTemperatureLowTime":1626352920,"dewPoint":72.35,"humidity":0.85,"pressure":1016.1,"windSpeed":11.16,"windGust":19.46,"windGustTime":1626259860,"windBearing":79,"cloudCover":0.54,"uvIndex":10,"uvIndexTime":1626301200,"visibility":10,"ozone":290.1,"temperatureMin":69.22,"temperatureMinTime":1626261900,"temperatureMax":83.48,"temperatureMaxTime":1626307740,"apparentTemperatureMin":71.4,"apparentTemperatureMinTime":1626262200,"apparentTemperatureMax":89.14,"apparentTemperatureMaxTime":1626285420},{"time":1626343200,"summary":"Humid throughout the day.","icon":"clear-day","sunriseTime":1626364500,"sunsetTime":1626412260,"moonPhase":0.21,"precipIntensity":0.0009,"precipIntensityMax":0.0059,"precipIntensityMaxTime":1626343200,"precipProbability":0.24,"precipType":"rain","temperatureHigh":83.39,"temperatureHighTime":1626372000,"temperatureLow":71.05,"temperatureLowTime":1626440160,"apparentTemperatureHigh":89.12,"apparentTemperatureHighTime":1626372000,"apparentTemperatureLow":73.17,"apparentTemperatureLowTime":1626440040,"dewPoint":72.37,"humidity":0.84,"pressure":1016.4,"windSpeed":11.33,"windGust":19.08,"windGustTime":1626417480,"windBearing":85,"cloudCover":0.16,"uvIndex":11,"uvIndexTime":1626387780,"visibility":10,"ozone":289.5,"temperatureMin":70.01,"temperatureMinTime":1626353040,"temperatureMax":83.39,"temperatureMaxTime":1626372000,"apparentTemperatureMin":72.22,"apparentTemperatureMinTime":1626352920,"apparentTemperatureMax":89.12,"apparentTemperatureMaxTime":1626372000},{"time":1626429600,"summary":"Humid throughout the day.","icon":"clear-day","sunriseTime":1626450900,"sunsetTime":1626498660,"moonPhase":0.25,"precipIntensity":0.0017,"precipIntensityMax":0.0066,"precipIntensityMaxTime":1626512400,"precipProbability":0.18,"precipType":"rain","temperatureHigh":83.83,"temperatureHighTime":1626458340,"temperatureLow":71.04,"temperatureLowTime":1626521520,"apparentTemperatureHigh":90.29,"apparentTemperatureHighTime":1626458340,"apparentTemperatureLow":73.22,"apparentTemperatureLowTime":1626523380,"dewPoint":73.01,"humidity":0.86,"pressure":1016.3,"windSpeed":12.73,"windGust":20.99,"windGustTime":1626480420,"windBearing":79,"cloudCover":0.16,"uvIndex":11,"uvIndexTime":1626474360,"visibility":10,"ozone":286.9,"temperatureMin":71.05,"temperatureMinTime":1626440160,"temperatureMax":83.83,"temperatureMaxTime":1626458340,"apparentTemperatureMin":73.17,"apparentTemperatureMinTime":1626440040,"apparentTemperatureMax":90.29,"apparentTemperatureMaxTime":1626458340}]},"flags":{"sources":["nwspa","cmc","gfs","icon","isd","madis","nam","sref","darksky","nearest-precip"],"nearest-station":0.552,"units":"us"},"offset":-10}');

router.get("/", (req, res, next) => {
  res.send(NEW_MOCK_WEATHER_DATA);
});

module.exports = router;