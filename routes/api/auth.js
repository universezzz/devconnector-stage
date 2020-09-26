const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const AuthController = require('../../controllers/auth');
const authMiddleware = require('../../middleware/auth');

// @route GET api/auth
// @desc Get a user
// @access Private
router.get('/', authMiddleware, AuthController.getActualUser);

// @route POST api/auth
// @desc Authenticate user & get token
// @access Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  AuthController.login
);

module.exports = router;
