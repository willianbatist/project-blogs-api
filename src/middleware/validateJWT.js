const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const { User } = require('../database/models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decoded = jwt.verify(token, JWT_SECRET);

  const user = await User.findOne({ 
    where: { email: decoded.data.email },
    attributes: ['displayName', 'email', 'image'],
   });

   if (!user) {
     return res.status(401).json({ message: 'Expired or invalid token' });
   }

  return next();
};