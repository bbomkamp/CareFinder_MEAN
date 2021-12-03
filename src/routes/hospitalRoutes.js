let express = require('express');
let router = express.Router();
let hospitalController = require('../controllers/hospitalController');

/**
 * Hospital Routes
 */
router.get('', hospitalController.find);
router.put('',  hospitalController.put);
router.delete('',  hospitalController.delete);
router.post('',  hospitalController.post);


module.exports = router;
