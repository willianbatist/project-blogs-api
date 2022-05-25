const Post = require('../services/post');

const create = async (req, res) => {
    try {
      const post = await Post.create(req.user, req.body);
      return res.status(201).json(post);  
    } catch (error) {
      return res.status(500).json({ message: error.message });  
    }
  };
  
  const postAll = async (_req, res) => {
    try {
      const find = await Post.postAll();
      return res.status(200).json(find);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    create,
    postAll,
  };