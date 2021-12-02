let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.post('/register', userController.createUser);
//router.post('./login', userController.login);


module.exports = router;