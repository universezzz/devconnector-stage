const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Post = require('../models/Post');

async function createPost(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select('-password');

    const newPost = new Post({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    });

    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}

async function getAllPosts(req, res, next) {}

async function getPostById(req, res, next) {}

async function deletePostById(req, res, next) {}

async function likePost(req, res, next) {}

async function unLikePost(req, res, next) {}

async function addCommentToPost(req, res, next) {}

async function deleteComment(req, res, next) {}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePostById,
  likePost,
  unLikePost,
  addCommentToPost,
  deleteComment,
};
