const { BlogPost, PostCategory, User, Category } = require('../models');

const create = async (user, body) => {
  const { title, content, categoryIds } = body;
  const findUser = await User.findOne({ where: { email: user.payload } });
  const creat = await BlogPost.create({ title, content, userId: findUser.id });
  const category = categoryIds
  .map(async (id2) => PostCategory.create({ postId: creat.id, categoryId: id2 }));
  await Promise.all(category);
  return creat;
};

const postAll = async () => {
  const find = await BlogPost
  .findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return find;
};

module.exports = {
  create,
  postAll,
};