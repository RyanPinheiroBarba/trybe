const jwt = require('jsonwebtoken');

const generateJWT = (payload) => {
  const secret = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = { generateJWT, verifyToken };