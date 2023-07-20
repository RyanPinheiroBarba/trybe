const express = require('express');

const categoriesController = require('../controllers/categories.controller');

const validateToken = require('../middlewares/validateToken');
const validateCategory = require('../middlewares/validateCategory');

const categoriesRouter = express.Router();

categoriesRouter.get('/', validateToken, categoriesController.getCategories);

categoriesRouter.post('/', validateCategory, validateToken, categoriesController.postCategories);

module.exports = categoriesRouter;