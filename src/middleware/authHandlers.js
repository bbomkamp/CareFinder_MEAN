let jwt = require('jsonwebtoken');
require('dotenv').config();
let User = require('../models/userModel');

/**
 * Verify Admin Status
 *
 * The User is searched by ID.
 */
exports.verifyAdmin = async (req, res, next) => {
    const user = await User.find({email: req.userEmail}).exec();
    if (!user)
        res.status(403).send({ auth: false, message: 'Your User Email cannot be found.' });
    if(user.admin===false)
        await res.json({status: 403, auth: false, message: 'You are not an Admin.'});
    next()
};

/**
 * Verify JWT Token
 *
 * Token is received in Headers.
 */
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
                    req.userEmail = decoded.email;
                    next();
                }
            });
        }
    } catch (e) {
        console.error(e)
    }
};
