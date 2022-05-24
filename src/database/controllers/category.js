const Category = require('../services/category');

const create = async (req, res) => {
  const category = await Category.create(req.body);
  return res.status(201).json(category);
};

const find = async (_req, res) => {
  const categoryAll = await Category.find();
  return res.status(200).json(categoryAll);
};

module.exports = {
  create,
  find,
};