const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DAO = require('./src/dao');
const LocationModel = require('./src/locationModel');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3031;
const dao = new DAO();
const locationModel = new LocationModel(dao);
locationModel.createTable();

app.use(cors());
app.get('/api/locations', async (req, res, next) => {
  try {
    const locations = await locationModel.getAll();
    res.status(200).json(locations);
  } catch (error) {
    next({
      status: 400,
      message: err
    });
  }
});

app.post('/api/location', async (req, res, next) => {
  const { name, description, latitude, longitude } = req.body;

  console.log(req.body);

  try {
    const id = await locationModel.create(
      name,
      description,
      latitude,
      longitude
    );
    res.status(201).json({ id, name, description, latitude, longitude });
  } catch (error) {
    console.log(error);
    next({
      status: 400,
      message: error
    });
  }
});

app.get('/api/location/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const location = await locationModel.getWithId(id);
    if (location) res.json(location);
    else {
      next({
        status: 404,
        message: 'The place that you are looking for is not available'
      });
    }
  } catch (error) {
    next({
      status: 400,
      message: err
    });
  }
});

app.delete('/api/location/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const location = await locationModel.delete(id);
    res.json({ message: 'deleted' });
  } catch (error) {
    next({
      status: 400,
      message: err
    });
  }
});

const errorHandler = (error, req, res, next) => {
  return res.status(error.status || 500).json({
    error: {
      message: error.message || 'Opp! Something went wrong..'
    }
  });
};

app.use(errorHandler);

app.listen(port, () => console.log('Location is running on ' + port));
