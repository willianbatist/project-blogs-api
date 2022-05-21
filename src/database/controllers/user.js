const User = require('../services/user');

const login = async (req, res) => {
  const { email } = req.body;
  const token = await User.login(email);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};