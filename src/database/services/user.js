const generateJWT = require('../utils/generateJWT');
const { User } = require('../models');

const login = async (obj) => {
  const token = generateJWT(obj);
  return token;
};

const create = async (body) => {
  const { displayName, email, password, image } = body;
  await User.create({ displayName, email, password, image });
  const token = generateJWT({ displayName, email, image });
  return token;
};

module.exports = {
  login,
  create,
};