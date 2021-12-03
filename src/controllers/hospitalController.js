let errorHandler = require("../middleware/error-handlers");
const hospital = require('../models/hospitalModel');


/**
 * GET Request
 *
 * Reads a resource from the server.
 * If the query is empty (length of 0) then all Hospitals will be retrieved.
 * A switch statement is used to identify the query and return any and all
 * resources (hospital(s)) with that particular query value.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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


/**
 * DELETE Request
 *
 * Removes a resource (hospital) from the DataBase.
 * A switch statement is used to identify the query and delete any and
 * all resources (hospital(s)) with the particular query value.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
    switch (Object.keys(req.query)[0]){
        case 'providerId':
            hospital.deleteMany({providerId: req.query.providerId}).then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'name':
            hospital.deleteMany({name: req.query.name}).exec().then(response => res.json(response))
                .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'city': hospital.deleteMany({city: req.query.city}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'state': hospital.deleteMany({state: req.query.state}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'zipCode': hospital.deleteMany({zipCode: req.query.zipCode}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'county': hospital.deleteMany({county: req.query.county}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'phoneNumber': hospital.deleteMany({phoneNumber: req.query.phoneNumber}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'hospitalType': hospital.deleteMany({hospitalType: req.query.hospitalType}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'ownership': hospital.deleteMany({ownership: req.query.ownership}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
        case 'emergencyServices': hospital.deleteMany({emergencyServices: req.query.emergencyServices}).exec().then(response => res.json(response))
            .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
            break
    }
}


/**
 * POST Request
 *
 * Creates a new resource (hospital) in the Database.
 * Resource is sent in the body of the request.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.post = async (req, res) => {
   await hospital.insertMany(req.body).then(response => res.json(response))
       .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
}


/**
 * PUT Request
 *
 * Updates or replaces resources on the server if the resources exist.
 * The resource available to update is the providerId.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.put = async (req, res) => {
    hospital.findOneAndUpdate({providerId: req.query.providerId}, req.body).exec().then(response => res.json(response))
        .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
}

