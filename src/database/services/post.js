const { BlogPost, PostCategory, User } = require('../models');

const create = async (user, body) => {
  const { title, content, categoryIds } = body;
  const findUser = await User.findOne({ where: { email: user.payload } });
  const creat = await BlogPost.create({ title, content, userId: findUser.id });
  const category = categoryIds
  .map(async (id2) => PostCategory.create({ postId: creat.id, categoryId: id2 }));
  await Promise.all(category);
  return creat;
};

module.exports = {
  create,
};