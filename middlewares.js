const jwt = require('jsonwebtoken');
// ************************************************************
// Assuming that this info is coming from process.env.secret
// ************************************************************
const secret = 's3cr3t';
// ************************************************************

function authenticate(req, res, next) {
    const { authorization } = req.headers;
    if (authorization) {
      // Authorization: Bearer token
      const token = authorization.split(' ')[1];
      jwt.verify(token, secret, (error, decodedToken) => {
        if (error) {
          return res.status(401).json('Authentication error');
        } else {
          req.decoded = decodedToken;
          next();
        }
      })
    } else {
      return res.status(403).json('No token provided');
    }
  }

function getIDAsInteger(req, res, next) {
    const id = +req.params.id;
    if(Number.isInteger(id)) {
        next();        
    } else {
        return res.status(400).json('ID must be an integer');
    }
}

module.exports = {
    getIDAsInteger,
    authenticate
}