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

const userId = async (req, res) => {
  try {
  const { id } = req.params;
  const idUser = await User.userId(id);
  if (!idUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(idUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  create,
  allUsers,
  userId,
};