const fetch = require('node-fetch');

require('dotenv').config({path: require('find-config')('.env')});
const pixabayApiKey = process.env.PIXABAY_API_KEY;
const pixabayBaseApi = 'https://pixabay.com/api/';

async function getPictureOfLocation(location) {
    const url = `${pixabayBaseApi}?key=${pixabayApiKey}&q=${location}`
    const pictures = await fetch(url);
    const picturesJson = await pictures.json();
    return picturesJson['hits'][0]  // returns the top hit for that location
}

module.exports = getPictureOfLocation
