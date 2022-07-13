const setErrorOnNonExistFile = (req, response) => {
  response.statusCode = 404;
  response.setHeader('content-type', 'text/plain');
  response.end('FILE NOT FOUND');
};

const notFoundHandler = (req, res, next) => {
  setErrorOnNonExistFile(req, res);
};

module.exports = { notFoundHandler };
