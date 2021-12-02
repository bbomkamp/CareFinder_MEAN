const User = require('../models/userModel');
const errorHandler = require("../middleware/error-handlers");
const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save().then(() => {
            res.status(201).send("User Successfully Created");
        }).catch(x => res.send(x));
    } catch (e) {
        errorHandler.catchErrors(400)
    }
}

exports.login = async (req, res) => {

   try {
      await User.findOne({email: req.body.email}).then(response => {

         if (response==null) {
            return res.status(404).send('Not Found');
         }
         let validPassword = bcrypt.compareSync(req.body.password, response.password);

         if (!validPassword){
            return res.status(401).send({auth: false, token: null});
         }
         else {
            let token = jwt.sign({id: response._id}, process.env.KEY, {
                expiresIn: 43200
            });
            res.status(200).send({auth: true, token: token, admin: response.admin});
         }
      }).catch(reason => res.send(reason));

   }catch (e) {
       res.send(e);
   }
};