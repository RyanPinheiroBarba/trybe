const validateCategory = (req, res, next) => {
  const { name } = req.body;
  
  if (!name || name === null) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

module.exports = validateCategory;