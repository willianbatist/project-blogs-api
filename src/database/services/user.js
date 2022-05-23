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

const allUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const userId = async (id) => {
  const idUser = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!idUser) return false;
  return idUser;
};

module.exports = {
  login,
  create,
  allUsers,
  userId,
};