const validationLogin = (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) res.status(400).json({ message: 'Some required fields are missing' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
  next();
};

module.exports = {
  validationLogin,
};