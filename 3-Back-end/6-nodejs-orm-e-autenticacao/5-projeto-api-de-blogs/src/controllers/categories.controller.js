const categoriesService = require('../services/categories.service');

const postCategories = async (req, res) => {
  const { name } = req.body;
  const categories = await categoriesService.postCategories(name);
  
  if (categories.message) return res.status(409).json({ message: categories.message });

  return res.status(201).json(categories);
};

const getCategories = async (_req, res) => {
  const categories = await categoriesService.getCategories();

  return res.status(200).json(categories);
};

module.exports = { postCategories, getCategories };