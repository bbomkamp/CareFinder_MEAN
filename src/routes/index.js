const express = require('express');
const server = express();

let hospitalRoutes = require('./hospitalRoutes');

server.use('/hospitals', hospitalRoutes);

module.exports = server;
