const userService = require('../services/user.service');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await userService.userPost(displayName, email, password, image);
  if (result.message) {
 return res.status(409).json({ message: result.message }); 
}
  return res.status(201).json(result);
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (user.message) {
    return res.status(404).json({ message: user.message });
  }
  return res.status(200).json(user);
};

module.exports = { userPost, getUsers, getUserById };