let errorHandler = require("../middleware/error-handlers");
const hospital = require('../models/hospitalModel');



exports.findAllHospitals = async (req, res) => {
    await hospital.find({})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};


exports.findProviderId = async (req, res) => {
    await hospital.find({providerId: req.params.providerId})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};