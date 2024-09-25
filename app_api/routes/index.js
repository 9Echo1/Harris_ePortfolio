const express = require('express'); // Express app
const router = express.Router();    // Router logic

// This is where we import the controllers we want to route
const tripsController = require('../controllers/trips');

// Define the route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); // Get Method routes tripsList

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;