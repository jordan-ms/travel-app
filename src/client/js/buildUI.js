function buildUi(data) {
    console.log('Data in buildUi is: ', data);
    const pictureData = data['picture'];
    insertPicture(pictureData);
    const geoInfo = data['geoNameInfo'];
    insertDestination(geoInfo);
    const weatherInfo = data['weather'];
    insertWeather(weatherInfo);
}

function insertPicture(pictureData) {
    const picture = document.createElement('img');
    picture.setAttribute('id', 'picture');
    picture.setAttribute('src', pictureData['webformatURL']);
    picture.setAttribute('height', "200px");
    const main = document.getElementById("main");
    main.appendChild(picture);
}

function insertDestination(data) {
    const destElem = document.getElementById('dest');
    const destString = data['name'];
    destElem.innerText = `My trip to: ${destString}`;
}

function insertDepartureDate(date) {
    const dateElem = document.getElementById('date');
    dateElem.innerText = `Departing: ${date}`;
}

function calculateDaysAway(depDate, retDate) {
    const departureDate = new Date(depDate);
    const currentDate = new Date();
    const returnDate = new Date(retDate);
    // There are 86.4 million milliseconds in a day.
    const daysAway = (departureDate - currentDate) / 86400000;
    const duration = (returnDate - departureDate) / 86400000;
    const daysAwayElem = document.getElementById('days-away');
    // "Float | 0" removes decimals
    daysAwayElem.innerText = `Distance in future: ${daysAway | 0} days. Trip duration: ${duration | 0} days.`
}

function insertWeather(data) {
    const weatherElem = document.getElementById('weather');
    const weatherData = data['data'][0];
    const temp = weatherData['temp'];
    const precip = weatherData['precip'];
    const snow = weatherData['snow'];
    let weatherString = `Weather: ${temp} degrees`;
    if (precip > 0) {
        weatherString += ', some precipitation';
    }
    if (snow > 0) {
        weatherString += ', some snow.';
    }
    weatherElem.innerText = weatherString;
}

export {
    buildUi,
    insertDepartureDate,
    calculateDaysAway
}
