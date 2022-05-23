const { User } = require('../database/models');

const isValidEmail = (email) => /[a-z0-9]+[@]+[a-z]+[.]+[a-z]/.test(email);

const checkUser = (req, res, next) => {
  const { displayName, password } = req.body;
  if (displayName.length < 8) {
    return res
    .status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  return next();
};

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return next();
};

module.exports = {
  checkUser,
  checkEmail,
};