let errorHandler = require("../middleware/error-handlers");
const Hospital = require('../models/hospitalModel');

exports.findAllHospitals = async (req, res) => {
    let hospitals = await Hospital.find().exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

    res.send(hospitals);
};
