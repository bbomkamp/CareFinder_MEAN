const User = require('../models/userModel');
const errorHandler = require("../middleware/error-handlers");

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save().then(() => {
            res.status(201).send("User Made");
        }).catch(x => res.send(x));
    } catch (e) {
        errorHandler.catchErrors(400)
    }
}