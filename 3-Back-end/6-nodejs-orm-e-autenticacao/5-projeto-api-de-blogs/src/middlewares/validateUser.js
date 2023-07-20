const validateUserName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  next();
};

const validateUserEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
  const regexTestEmail = regex.test(email);
  console.log(regexTestEmail);
  if (regexTestEmail === false) {
    return res.status(400).json(
      { message: '"email" must be a valid email' },
    );
  }
  next();
};

const validateUserPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json(
      {
        message: '"password" length must be at least 6 characters long',
      },
    );
  }
  next();
};

module.exports = {
  validateUserName,
  validateUserEmail,
  validateUserPassword,
};