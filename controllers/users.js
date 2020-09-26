const jwt = require('jsonwebtoken');
const config = require('config');
const gravatar = require('gravatar');
const { validationResult } = require('express-validator');

const { generateHashedPassword, generateToken } = require('../utils/jwt');
const User = require('../models/User');

async function register(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    });

    user = new User({
      name,
      email,
      avatar,
      password,
    });

    user.password = await generateHashedPassword(password);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = await generateToken(payload);

    res.json(token);
  } catch (err) {
    console.log(err.message);

    res.status(500).send('Send error');
  }
}

module.exports = {
  register,
};
