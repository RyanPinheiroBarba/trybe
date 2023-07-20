const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
  const regexTestEmail = regex.test(email);
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (regexTestEmail === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = validateLogin;