let jwt = require('jsonwebtoken');
require('dotenv').config();
let errorHandler = require('../middleware/error-handlers');
let User = require('../models/userModel');

