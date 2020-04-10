const getWeather = require('../src/server/js/getWeather');

test('gets weather for Berlin with correct lat and longitude', async () => {
    const lat = 52.5200;
    const long = 13.4050;
    const date = '04-04-2020';
    const response = await getWeather(lat, long, date);
    const city = response["data"][0]["city_name"];

    expect(city).toBe("Berlin");
})
