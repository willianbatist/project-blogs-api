const { Category, BlogPost, User } = require('../database/models');

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

const verifyPost = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

const verifyEditPost = async (req, res, next) => {
  const { id } = req.params;
  const { payload } = req.user;
  const findUser = await User.findOne({ where: { email: payload } });
  const post = await BlogPost.findOne({ where: { id }, 
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  if (findUser.id !== post.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return next();
};

module.exports = {
  checkPost,
  verifyPost,
  verifyEditPost,
};