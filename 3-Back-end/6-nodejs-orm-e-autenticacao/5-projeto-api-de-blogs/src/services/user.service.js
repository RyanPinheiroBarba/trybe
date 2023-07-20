const { User } = require('../models');
const { generateJWT } = require('./auth.login');

const userPost = async (displayName, email, password, image) => {
  const getUser = await User.findOne({ where: { email } });
  
  if (getUser) return ({ message: 'User already registered' });

  const postUser = await User.create({ displayName, email, password, image });

  if (!postUser || postUser === null) {
    return { message: 'Invalid fields' };
  }

  delete postUser.dataValues.password;
  const token = { token: generateJWT(postUser.dataValues) };

  return token;
};

const getUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user || user === null) return ({ message: 'User does not exist' });
  return user;
};

module.exports = { userPost, getUsers, getUserById };