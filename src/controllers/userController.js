const User = require('../models/userModel');
const errorHandler = require("../middleware/error-handlers");
const jwt = require("jsonwebtoken");
require('dotenv').config();


/**
 * Saves new User to the Database.
 *
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save().then(() => {
            res.status(201).send("User Successfully Created");
        }).catch(x => res.send(x));
    } catch (e) {
        errorHandler.catchErrors(400)
    }
};

/**
 * Login
 *
 * First it checks the Database if the email exist within the Database.
 * Then the password is hashed and checked for validation.
 * If the password passes validation a new token is signed and sent to client.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.login = async (req, res) => {

   try {
      await User.findOne({email: req.body.email}).then(response => {

          // If the response from the database is null, the user does not exist.
         if (response == null) {
            return res.status(404).send('User Does Not Exist.');
         }

         let validatePassword = bcrypt.compareSync(req.body.password, response.password);

         if (!validatePassword){
            return res.status(401).send({auth: false, token: null});
         }
         else {
            let token = jwt.sign({id: response._id}, process.env.KEY, {
                // Token expires in 12 hours
                expiresIn: 43200
            });
            res.status(200).send({auth: true, token: token, admin: response.admin});
         }
      }).catch(reason => res.send(reason));

   }catch (e) {
       res.send(e);
   }
};

/**
 * Returns all Users held in Database.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.allUsers = async  (req, res) => {
    const users = await User.find({}).exec();
    await res.json({data: users})
};



exports.deleteAllUsers = async (req, res) => {

}

/**
 * Deletes a single User of choice.
 * The User is found by email and then removed from the DataBase.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteUser = async (req, res) => {
     User.deleteOne({email: req.query.email
    }).exec().then(res.status(204).send()).catch(reason => res.send(reason));
}