const httpMocks = require('node-mocks-http');

const PostController = require('../../controllers/posts');
const User = require('../../models/User');
const Post = require('../../models/Post');
const { createdUser, user } = require('../mock-data/user');

jest.mock('../../models/Post');
User.findById = jest.fn();

let req, res, next, newUser;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('PostController.createPost', () => {
  beforeAll(() => {
    newUser = new User({ ...user, avatar: createdUser.avatar });
  });

  it('should have a createPost handler', () => {
    expect(typeof PostController.createPost).toBe('function');
  });

  it('should create a post and return', async () => {
    req.body.text = 'Some text description';
    req.user = {
      id: newUser._id,
    };

    const copiedNewUser = { ...newUser, select: () => newUser };
    User.findById.mockReturnValue(copiedNewUser);

    await PostController.createPost(req, res, next);

    expect(Post).toHaveBeenCalledWith({
      text: req.body.text,
      name: newUser.name,
      avatar: newUser.avatar,
      user: newUser._id,
    });

    expect(res.statusCode).toBe(201);
  });
});
