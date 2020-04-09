const searchGeoNamesByLocation = require('./js/geoNamesSearch');
const getWeather = require('./js/getWeather');
const getPicture = require('./js/getLocationPicture')

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors({
    'credentials': true
}));
app.use(express.static('dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 3001;


app.get('/', (req, res) => {
        res.sendFile('dist/index.html');
    }
)

app.post('/post-trip-info', async function (req, res) {
    const location = req.body.location;
    const date = req.body.date;  // format: YYYY-MM-DD
    const geoNameDict = await searchGeoNamesByLocation(location);
    const latitude = geoNameDict['lat'];
    const longitude = geoNameDict['lng'];
    const weather = await getWeather(latitude, longitude, date);
    const picture = await getPicture(location);
    const responseDict = {
        geoNameInfo: geoNameDict,
        weather: weather,
        picture: picture
    }
    res.send(responseDict);
})

app.listen(port, () => console.log(`app listening on port: ${port}`));
