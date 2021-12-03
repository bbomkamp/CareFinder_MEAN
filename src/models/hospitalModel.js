const mongoose = require("mongoose");

/**
 * Hospital Model
 */
const hospitalSchema = new mongoose.Schema({
    providerId: {type: String},
    name: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zipCode: {type: String},
    county: {type: String},
    phoneNumber: {type: String},
    hospitalType: {type: String},
    ownership: {type: String},
    emergencyServices: {type: String},
    location: {
        humanAddress: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
        needsRecoding: {type: String}
    },
});

module.exports = mongoose.model('hospital', hospitalSchema);
