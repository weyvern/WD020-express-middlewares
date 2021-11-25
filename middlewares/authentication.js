const authentication = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(401); // wrong method used
  }
};

export default authentication;
