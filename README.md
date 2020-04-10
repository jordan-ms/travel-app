# Travel Planner App
## About
The Travel Planner App is a one-page web app. Users are able to insert their anticipated travelling dates and
location, and from that receive predicted weather and a picture of the location.  
  
This project makes extensive use of the [webpack](https://webpack.js.org/) build tool. 
It is highly recommended that those contributing use the webpack dev server, which is 
outlined below. Learn more about getting started with webpack 
[here](https://webpack.js.org/guides/getting-started/).

## Getting Started

### Installing dependencies
This project requires `node.js`. If you don't have it installed already, you can 
find instructions for downloading it [here](https://nodejs.org/en/download/). 
Once you have `node` installed, download the required dependencies from 
`package.json` by typing the following in your terminal:
```
npm install
```

### Generating the production build
Run the following in your terminal:
```
npm run build-prod
```
The build will be generated in `dist/`.

### Generating the development build
Run the following in your terminal:
```
npm run build-dev
```
The build will be generated in `dist/`.

### Running Webpack's dev server
Run the following in your terminal:
```
npm run dev-server
```
The dev server will automatically open a new window with `src/client/index.html`
loaded. The dev server watches all files that are linked to `src/client/index.js`
and allows for awesome features like hot reload. More information can be found
[here](https://webpack.js.org/configuration/dev-server/). Please note that even
if you are using the dev server, you still need to start the backend server (see
below).

### Running the backend server
Run the following in your terminal:
```
npm run express-server
```
This will run the express server on port 3001. You can then access the landing
page at `http://localhost:3001/`.

### Running tests
Run the following in your terminal:
```
npm run test
```
This will run the `jest` tests in the `tests/` directory.