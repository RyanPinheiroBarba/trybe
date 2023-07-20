const { verifyToken } = require('../services/auth.login');

const validateToken = async (req, res, next) => {
 try {
   const token = req.headers.authorization;
   const newToken = token.replace('Bearer ', '');
   if (!newToken || newToken === null) {
     return res.status(401).json({ message: 'Token not found' }); 
    } 
    const resultVerify = await verifyToken(newToken);
    req.user = resultVerify;
    next();
} catch (error) {
  return res.status(401).json({ message: 'Expired or invalid token' });
}
};

module.exports = validateToken;