const fs = require('fs');

const extentions = {
  '.html': 'text/html',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.gif': 'imaghes/gif',
  '.json': 'application/json'
};

const getContentType = (filename) => {
  const indexOfExtention = filename.lastIndexOf('.');
  const extention = filename.slice(indexOfExtention);
  return extentions[extention] ? extentions[extention] : 'text/plain';
};

const serveFileHandler = (req, response, next) => {
  const { pathname } = req.url;
  let filepath = './public' + pathname;

  if (pathname === '/') {
    filepath = filepath + 'fileupload.html';
  }
  if (!fs.existsSync(filepath)) {
    next();
    return;
  }

  const contentType = getContentType(filepath);
  const content = fs.readFileSync(filepath);

  response.setHeader('content-type', contentType);
  response.end(content);
  return;
};

module.exports = { serveFileHandler };
