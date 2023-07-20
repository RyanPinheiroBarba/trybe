const { Op } = require('sequelize');
const { User } = require('../models');
const { generateJWT } = require('./auth.login');

const loginPost = async (email, password) => {
  const getUser = await User.findOne(
    {
      where: { [Op.and]: [{ email }, { password }] },
    },
    );
    if (!getUser || getUser === null) {
      return { message: 'Invalid fields' };
    }
    delete getUser.dataValues.password;
  const token = { token: generateJWT(getUser.dataValues) };
  return token;
};

module.exports = loginPost;
