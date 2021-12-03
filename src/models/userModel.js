const mongoose = require("mongoose");

/**
 * User Model.
 */
const userSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, require: true, default: 'USER', enum: ["USER", "ADMIN"]},
    date: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', userSchema);