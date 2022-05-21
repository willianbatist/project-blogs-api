const generateJWT = require('../utils/generateJWT');

const login = async (obj) => {
  const token = generateJWT(obj);
  return token;
};

module.exports = {
  login,
};