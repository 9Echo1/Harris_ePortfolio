const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register Model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList
};

// Get: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return a single record
        .exec();

        console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return the resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};