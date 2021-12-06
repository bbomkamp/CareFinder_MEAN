const User = require('../models/userModel');
const errorHandler = require("../middleware/error-handlers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();


/**
 * Saves new User to the Database.
 */
exports.createUser = async (req, res) => {

    try {

        const emailExists = await User.findOne({email: req.body.email});
        if (emailExists) return res.status(409).send("Email already exists");

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        let userToSave = {
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
        }

        const user = new User(userToSave);
        await user.save().then(() => {
            res.status(200).send("User Successfully Created");
        }).catch(x => res.send(x));
    } catch (e) {
        res.status(400).send("Bad Request")
    }
};

/**
 * Login
 *
 * First it checks the Database if the email exist within the Database.
 * Then the password is hashed and checked for validation.
 * If the password passes validation a new token is signed and sent to client.
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
            let token = jwt.sign({email: response.email}, process.env.KEY);
            // TODO: Return user info for client
            res.status(200).send({auth: true, token: token, admin: response.admin});
         }
      }).catch(reason => res.send(reason));

   }catch (e) {
       res.send(e);
   }
};

/**
 * Returns all Users held in Database.
 */
exports.allUsers = async  (req, res) => {
    const users = await User.find({}).exec();
    await res.json({data: users})
};


/**
 * Deletes all User in the DataBase.
 */
exports.deleteAllUsers = async (req, res) => {
    User.deleteMany({}).exec().then(res.status(204).send()).catch(reason => res.send(reason));
}

/**
 * Deletes a single User of choice.
 * The User is found by email and then removed from the DataBase.
 */
exports.deleteUser = async (req, res) => {
     User.deleteOne({email: req.body.email
    }).exec().then(res.status(204).send()).catch(reason => res.send(reason));
}

/**
 * Finds a single User.
 * The User is found by email which is sent in the body of the request.
 */
exports.aUser = async (req, res) => {
    console.log(req.body.email);
    let user = await User.findOne({email: req.body.email}).exec();
    await res.json(user)
}
