const User = require('../services/user');

const login = async (req, res) => {
  const { email } = req.body;
  const token = await User.login(email);
  return res.status(200).json({ token });
};

const create = async (req, res) => {
  const token = await User.create(req.body);
  return res.status(201).json({ token });
};

const allUsers = async (_req, res) => {
  const users = await User.allUsers();
  return res.status(200).json(users);
};

module.exports = {
  login,
  create,
  allUsers,
};