const express = require('express');
const router = express();
let hospitalRoutes = require('./hospitalRoutes');
let userRoutes = require('./userRoutes');

/**
 * Routes.
 */
router.use ('/user', userRoutes)
router.use('/hospitals', hospitalRoutes);



module.exports = router;
