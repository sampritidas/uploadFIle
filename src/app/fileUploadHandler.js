const fs = require('fs');

const fileUploadHandler = (req, res, next) => {
  const { pathname } = req.url;
  if (pathname === '/fileuploadhandler') {

    const field = Object.keys(req.body);
    field.forEach(element => {
      const filename = req.body[element].header.name;
      const value = req.body[element].value;
      fs.writeFileSync(filename, value);
    });

    res.end(`file uploaded`);
    return;
  }
  next();
  return;
};

module.exports = { fileUploadHandler };
