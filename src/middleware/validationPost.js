const { Category } = require('../database/models');

const checkPost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || categoryIds.length === 0) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const categoriesIds = (await Category.findAll()).map((category) => category.id);
    const validation = categoryIds.every((id) => categoriesIds.includes(id));
      if (!validation) {
        return res.status(400).json({ message: '"categoryIds" not found' });
      }
    return next();
};

module.exports = {
  checkPost,
};