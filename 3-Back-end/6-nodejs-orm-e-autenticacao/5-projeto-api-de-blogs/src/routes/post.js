const express = require('express');

const postController = require('../controllers/post.controller');

const validatePostPost = require('../middlewares/validatePostPost');
const validateToken = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.post('/', validatePostPost, validateToken, postController.postPost);

module.exports = postRouter;