let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');


/**
 * POST Request
 */
router.post('/register', userController.createUser);
router.post('./login', userController.login);


/**
 * GET Request
 */
router.get('/allUsers', userController.allUsers);
router.get('/aUser', userController.aUser);

/**
 * DELETE Request
 */
router.delete('/deleteAllUsers', userController.deleteAllUsers);
router.delete('/deleteUser', userController.deleteUser);



module.exports = router;