const httpMocks = require('node-mocks-http');
const gravatar = require('gravatar');

const User = require('../../models/User');
const UserController = require('../../controllers/users');
const { user, createdUser } = require('../mock-data/user');

jest.mock('../../models/User');
gravatar.url = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('UserController.register', () => {
  it('should have a register handler', () => {
    expect(typeof UserController.register).toBe('function');
  });

  it('should return "user already exists" error', async () => {
    const errorMessage = { errors: [{ msg: 'User already exists' }] };
    User.findOne.mockReturnValue(user);

    await UserController.register(req, res, next);

    expect(User.findOne).toHaveBeenCalledTimes(1);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toStrictEqual(errorMessage);
  });

  it('should create a user', async () => {
    req.body = user;

    User.findOne.mockReturnValue(null);
    gravatar.url.mockReturnValue(createdUser.avatar);

    await UserController.register(req, res, next);

    expect(gravatar.url).toHaveBeenCalledTimes(1);
    expect(User).toHaveBeenCalledWith({
      ...user,
      avatar: createdUser.avatar,
    });
  });
});
