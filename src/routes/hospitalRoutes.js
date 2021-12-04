let express = require('express');
let router = express.Router();
let jwtHandler = require('../middleware/authHandlers')
let hospitalController = require('../controllers/hospitalController');

/**
 * Hospital Routes
 */
router.get('', jwtHandler.verifyToken, hospitalController.find);
router.put('', jwtHandler.verifyToken, jwtHandler.verifyAdmin, hospitalController.put);
router.delete('', jwtHandler.verifyToken, jwtHandler.verifyAdmin,  hospitalController.delete);
router.post('', jwtHandler.verifyToken, jwtHandler.verifyAdmin,  hospitalController.post);


module.exports = router;
