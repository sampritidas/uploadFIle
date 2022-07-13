const { startServer } = require('./src/server/startServer.js');
const { createRouter } = require('./src/server/createRouter.js');
const { notFoundHandler } = require('./src/handlers/notFoundHandler.js');

module.exports = { startServer, createRouter, notFoundHandler };
