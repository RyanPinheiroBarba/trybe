const express = require('express');

const userController = require('../controllers/user.controller');

const { validateUserName, validateUserEmail,
validateUserPassword } = require('../middlewares/validateUser');

const validateToken = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.get('/', validateToken, userController.getUsers);
userRouter.get('/:id', validateToken, userController.getUserById);

userRouter.post(
'/', 
validateUserName, 
validateUserEmail, 
validateUserPassword, 
userController.userPost,
);

module.exports = userRouter;