const Category = require('../services/category');

const create = async (req, res) => {
  const category = await Category.create(req.body);
  return res.status(201).json(category);
};

module.exports = {
  create,
};