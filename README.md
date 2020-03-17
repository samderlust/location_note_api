# Location Note API

## Overview

This is a web service API that provides info about location notes.
Create and retrieve location notes

### -GET: /api/locations

- retrive list of location notes

### -POST: /api/location

- post a new location note
- sample body
  <pre>{
      "name": "ottawa",
      "description": "This is a nice place",
      "latitude": 45.2487862,
      "longitude": -76.3606792
  }<pre>

### -GET: /api/location/:id

- retrive a specific location note based on the ID

## Set up in Local host

- git checkout athttps://github.com/samderlust/location_note_api.git
- `yarn install` or `npm install` to install all the dependencies
- `yarn start` or `npm run start` to run on localmachine

### `yarn start` or `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3031](http://localhost:3031) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
