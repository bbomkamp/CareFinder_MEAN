let express = require('express');
let router = express.Router();
let jwtHandler = require('../middleware/authHandlers')
let userController = require('../controllers/userController');


/**
 * POST Request
 */
router.post('/register', userController.createUser);
router.post('/login', userController.login);


/**
 * GET Request
 */
router.get('/allUsers', jwtHandler.verifyToken, jwtHandler.verifyAdmin, userController.allUsers);
router.get('/aUser', jwtHandler.verifyToken, jwtHandler.verifyAdmin, userController.aUser);

/**
 * DELETE Request
 */
router.delete('/deleteAllUsers', jwtHandler.verifyToken, jwtHandler.verifyAdmin, userController.deleteAllUsers);
router.delete('/deleteUser', jwtHandler.verifyToken, jwtHandler.verifyAdmin, userController.deleteUser);



module.exports = router;
