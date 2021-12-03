let jwt = require('jsonwebtoken');
require('dotenv').config();
let errorHandler = require('../middleware/error-handlers');
let User = require('../models/userModel');

exports.verifyAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId).exec();
    if (!user)
        res.status(403).send({ message: 'No User Found' });
    if(!(user.role === "ADMIN"))
        await res.json({status: 401, message: 'You\'re not an admin'});
    next()
}


exports.verifyToken = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            res.status(401).send("Unauthorized")
        } else {
            jwt.verify(token, process.env.KEY, function (err, decoded) {
                if (err) {
                    res.status(401).send("Unauthorized")
                } else {
                    req.userId = decoded.id;
                    next();
                }
            });
        }
    } catch (e) {
        console.error(e)
    }
};
