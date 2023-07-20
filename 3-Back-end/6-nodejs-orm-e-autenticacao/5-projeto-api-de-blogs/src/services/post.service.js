const { BlogPost } = require('../models');
const { Category } = require('../models');

const postPost = async (title, content, userId, categoryIds) => {
  const post = await BlogPost.create({ title, content, userId });
  const { id } = post;

  const categories = await Category.findAll();

  const categoriesIds = categories.map((category) => category.id);

const validateCategories = categoryIds.every((category) => categoriesIds.includes(category));

  if (!validateCategories) {
    return { message: 'one or more "categoryIds" not found' };
  }
  
  await post.addCategories(categories);
  
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = { postPost };