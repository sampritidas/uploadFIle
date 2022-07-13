const { bodyParser } = require('./src/app/bodyParser');
const { serveFileHandler } = require('./src/app/serveFile');
const { fileUploadHandler } = require('./src/app/fileUploadHandler');
const { startServer, createRouter, notFoundHandler } = require('server');

const logRequest = (req, res, next) => {
  console.log(new Date(), req.method, req.url.pathname);
  next();
};

const handlers = [logRequest, bodyParser, serveFileHandler, fileUploadHandler, notFoundHandler];

const PORT = 4444;
startServer(PORT, createRouter(...handlers));