const fetch = require('node-fetch');

// recursively searches parent directories for .env file
require('dotenv').config({path: require('find-config')('.env')})
const weatherBitApiKey = process.env.WEATHERBIT_API_KEY;
const weatherbitBaseApi = 'http://api.weatherbit.io/v2.0/';
const apiKey = `&key=${weatherBitApiKey}`
const units = 'units=I'

async function getWeather(lat, long, date) {
    const departureDate = new Date(date);
    const currentDate = new Date();
    // There are 86.4 million milliseconds in a day.
    const dayDiff = (departureDate - currentDate) / 86_400_000;
    if (dayDiff < 7) {
        return await _getCurrentWeather(lat, long);
    }
    return await _getPredictedWeather(lat, long, departureDate);
}

// If the trip is within a week, return the current weather forecast.
async function _getCurrentWeather(lat, long) {
    const url = weatherbitBaseApi + `current?${units}&lat=${lat}&lon=${long}${apiKey}`;
    const weather = await fetch(url);
    return await weather.json()
}

// If the trip is in the future, return a predicted forecast.
async function _getPredictedWeather(lat, long, date) {
    // Takes start and end days in MM-DD format.
    // Because we're only looking at one date, start and end date are the same.
    const month = date.getMonth() + 1;  // JavaScript months are 0-11, weatherbit's are 1-12.
    const day = date.getDate();
    const dateString = `${month}-${day}`;
    const url = weatherbitBaseApi + `normals?${units}&lat=${lat}&lon=${long}` +
        `&start_day=${dateString}&end_day=${dateString}&tp=daily${apiKey}`
    const weather = await fetch(url);
    return await weather.json();
}

module.exports = getWeather
