const { createServer } = require('http');
const { notFoundHandler } = require('../handlers/notFoundHandler.js');

const startServer = (port, router = notFoundHandler) => {
  const server = createServer((req, res) => {
    req.url = new URL(`http://${req.headers.host}${req.url}`);
    router(req, res);
  });

  server.listen(port, () => console.log(`Listening on ${server.address().port}`));
};

module.exports = { startServer };
