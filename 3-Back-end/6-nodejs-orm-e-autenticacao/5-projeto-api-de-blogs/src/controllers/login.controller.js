const loginPostService = require('../services/login.service');

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginPostService(email, password);
  if (result.message) {
 return res.status(400).json({ message: result.message }); 
}
  return res.status(200).json(result);
};

module.exports = loginPost;
