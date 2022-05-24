const { Category } = require('../models');

const create = async (body) => {
  const { name } = body;
  const category = await Category.create({ name });
  return { id: category.id, name };
};

const find = async () => {
  const categoryAll = await Category.findAll();
  return categoryAll;
};

module.exports = {
  create,
  find,
};