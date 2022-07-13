const fileUploadHandler = (req, res, next) => {
  const { pathname } = req.url;
  if (pathname === '/fileuploadhandler') {
    console.log('req', req.body);
  }
  next();
  return;
};

module.exports = { fileUploadHandler };
