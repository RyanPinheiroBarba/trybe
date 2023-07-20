const postService = require('../services/post.service');

const postPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const result = await postService.postPost(title, content, id, categoryIds);

  if (result.message) return res.status(400).json({ message: result.message });

  return res.status(201).json(result);
};

module.exports = { postPost };