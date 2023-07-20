const express = require('express');
const loginPost = require('../controllers/login.controller');
const validateLogin = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginPost);

module.exports = loginRouter;