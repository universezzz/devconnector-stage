const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const { generateToken } = require('../utils/jwt');
const User = require('../models/User');

async function getActualUser(req, res, next) {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}

async function login(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

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
  getActualUser,
  login,
};
