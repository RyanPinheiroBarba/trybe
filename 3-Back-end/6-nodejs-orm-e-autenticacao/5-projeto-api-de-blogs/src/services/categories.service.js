const { Category } = require('../models');

const postCategories = async (name) => {
  const getCategoryByName = await Category.findOne({ where: { name } });

  if (getCategoryByName) return ({ message: 'Category already registered' });

  const result = await Category.create({ name });

  return result;
};

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = { postCategories, getCategories };