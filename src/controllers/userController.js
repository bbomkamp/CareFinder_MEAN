const user = require('../models/userModel');
const errorHandler = require("../middleware/error-handlers");

exports.createUser = async (req, res) => {
   await user.insertMany(req.body).then(response => res.json(response))
       .catch(err => errorHandler.invalidRoute(400, 'database', res, err.message))
   }