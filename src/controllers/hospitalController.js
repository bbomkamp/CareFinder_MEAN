let errorHandler = require("../middleware/error-handlers");
const hospital = require('../models/hospitalModel');
const {response} = require("express");


// GET Calls
exports.find = async (req, res) => {

    // If no request query is included, return all hospitals from database.
    if (Object.keys(req.query).length === 0){
        await hospital.find({}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

    // Switch statements for all the different searchable categories.
    // Works faster than the if statement.
    } else if (Object.keys(req.query).length === 1){
        switch (Object.keys(req.query)[0]){
            case 'providerId': hospital.find({providerId: req.query.providerId}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'name': hospital.find({name: req.query.name}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'city': hospital.find({city: req.query.city}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'state': hospital.find({state: req.query.state}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'zipCode': hospital.find({zipCode: req.query.zipCode}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'county': hospital.find({county: req.query.county}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'phoneNumber': hospital.find({phoneNumber: req.query.phoneNumber}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'hospitalType': hospital.find({hospitalType: req.query.hospitalType}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'ownership': hospital.find({ownership: req.query.ownership}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
            case 'emergencyServices': hospital.find({emergencyServices: req.query.emergencyServices}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
                break
        }
    }
    else {
        errorHandler.invalidRoute()
    }}
// GET Calls END

// POST Calls
exports.post = async (req, res) => {
    console.log(req.body);
   await hospital.insertMany(req.body).then(response => res.json(response))
       .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
}


// PUT Calls
// exports.put = async (req, res) => {
//     hospital.findOneAndUpdate({providerId: req.query.providerId}, req.body).exec().then(response => res.json(response))
//         .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
// }









/* // If the request query is "providerId", return hospital with matching "providerId".
    else if (Object.keys(req.query).toString() === "providerId"){
        await hospital.find({providerId: req.query.providerId}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "name", return hospital with matching "name".
    } else if (Object.keys(req.query).toString() === "name"){
        await hospital.find({name: req.query.name}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "city", return hospital with matching "city".
    } else if (Object.keys(req.query).toString() === "city"){
        await hospital.find({city: req.query.city}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "state", return hospital with matching "state".
    } else if (Object.keys(req.query).toString() === "state"){
        await hospital.find({state: req.query.state}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "zipCode", return hospital with matching "zipCode".
    } else if (Object.keys(req.query).toString() === "zipCode"){
        await hospital.find({zipCode: req.query.zipCode}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "county", return hospital with matching "county".
    } else if (Object.keys(req.query).toString() === "county"){
        await hospital.find({county: req.query.county}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "phoneNumber", return hospital with matching "phoneNumber".
    }  else if (Object.keys(req.query).toString() === "phoneNumber"){
        await hospital.find({phoneNumber: req.query.phoneNumber}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "hospitalType", return hospital with matching "hospitalType".
    } else if (Object.keys(req.query).toString() === "hospitalType"){
        await hospital.find({hospitalType: req.query.hospitalType}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "ownership", return hospital with matching "ownership".
    } else if (Object.keys(req.query).toString() === "ownership"){
        await hospital.find({ownership: req.query.ownership}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

        // If the request query is "emergencyServices", return hospital with matching "emergencyServices".
    }  else if (Object.keys(req.query).toString() === "emergencyServices"){
        await hospital.find({emergencyServices: req.query.emergencyServices}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
    }
}*/

/*
exports.findAllHospitals = async (req, res) => {
    await hospital.find({})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};


exports.findProviderId = async (req, res) => {
    await hospital.find({providerId: req.query.providerId})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};


exports.findHospitalName = async (req, res) => {
    await hospital.find({name: req.query.name})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};

exports.findCity = async (req, res) => {
    await hospital.find({city: req.query.city})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};

exports.findState = async (req, res) => {
    await hospital.find({state: req.query.state})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};
exports.findCounty = async (req, res) => {
    await hospital.find({county: req.query.county})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};
exports.findHospitalType = async (req, res) => {
    await hospital.find({hospitalType: req.query.hospitalType})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};
exports.findHospitalOwner = async (req, res) => {
    await hospital.find({ownership: req.query.ownership})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};
exports.findHospitalEmergency = async (req, res) => {
    await hospital.find({emergencyServices: req.query.emergencyServices})
        .exec()
        .then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))

};*/
