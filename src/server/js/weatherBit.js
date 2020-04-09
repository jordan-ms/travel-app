const fetch = require('node-fetch');

// recursively searches parent directories for .env file
require('dotenv').config({ path: require('find-config')('.env') })
const weatherBitApiKey = process.env.WEATHERBIT_API_KEY;
const currentWeatherUrl = 'http://api.weatherbit.io/v2.0/current';

async function getWeather(lat, long, date) {
    console.log(`lat: ${lat}, long: ${long}, date: ${date}`)
}

// If the trip is within a week, return the current weather forecast.
async function _getCurrentWeather(lat, long) {
}

// If the trip is in the future, return a predicted forecast.
async function _getPredictedWeather(lat, long) {
}

module.exports = getWeather