# Set the apiKey in file src/api/index.js or use mine 
In the project directory, run:
npm install
This install all packages to run this app.

Issue - The latest version of React 17 has issues installing "@material-ui/core' & "@material-ui/icons" 
Solution:   npm install --save --legacy-peer-deps @material-ui/icons
            npm install --save --legacy-peer-deps @material-ui/core

## Available Scripts

In the project directory, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

I have created a test to check articles are loaded or not in src/sagas/__test__/

### `npm run build`

Builds the app for production to the `build` folder.\