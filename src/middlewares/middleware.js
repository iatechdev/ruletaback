import jwt from 'jsonwebtoken';
import { secret } from '../config/config';

const checkToken = (req, res, next) => {
  let token = req.headers['authorization'];
  if (token) {
    let tokenString = token.split(' ')[1];
    if (tokenString) {
      jwt.verify(tokenString, secret, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  } else {
    return res.status(403).json({
      success: false,
      message: 'Forbidden'
    });

  }
};

module.exports = {
  checkToken: checkToken
}