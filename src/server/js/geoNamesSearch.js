const fetch = require('node-fetch');
const geoNamesUrl = 'http://api.geonames.org/searchJSON?';

// recursively searches parent directories for .env file
require('dotenv').config({ path: require('find-config')('.env') })
const username = process.env.GEONAMES_USERNAME

async function searchGeoNamesByLocation(location) {
    const apiURL = geoNamesUrl + `q=${location}&username=${username}`;
    console.log('apiURL is: ', apiURL)
    const response = await fetch(apiURL);
    const results = await response.json();
    return results['geonames'][0];  // This is the top result
}

module.exports = searchGeoNamesByLocation
