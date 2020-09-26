const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const generateHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) reject(err);
        resolve({ token });
      }
    );
  });
};

module.exports = {
  generateHashedPassword,
  generateToken,
};
