const httpMocks = require('node-mocks-http');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');
const AuthController = require('../../controllers/auth');
const { createdUser, user } = require('../mock-data/user');

const { invalidCredentialsError } = require('../mock-data/errors');

jest.mock('../../models/User');
bcrypt.compare = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('AuthController.getActualUser', () => {
  it('should have a getActualUser handler', () => {
    expect(typeof AuthController.getActualUser).toBe('function');
  });
});

describe('AuthController.login', () => {
  it('should have a login handler', () => {
    expect(typeof AuthController.login).toBe('function');
  });

  it('should return "invalid credentials" error if user was not found', async () => {
    User.findOne.mockReturnValue(null);

    await AuthController.login(req, res, next);

    expect(User.findOne).toHaveBeenCalledTimes(1);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toStrictEqual(invalidCredentialsError);
  });

  it('should return "invalid credentials" error if passwords do not match', async () => {
    req.body = user;
    User.findOne.mockReturnValue(createdUser);

    await AuthController.login(req, res, next);

    expect(bcrypt.compare).toHaveBeenCalledTimes(1);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toStrictEqual(invalidCredentialsError);
  });
});
