const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String},
    password: {type: String},
    admin: {type: Boolean}
})

module.exports = mongoose.model('user', userSchema);