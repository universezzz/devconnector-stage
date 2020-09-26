const httpMocks = require('node-mocks-http');
const jwt = require('jsonwebtoken');

const { createdUser } = require('../mock-data/user');
const { noTokenError, invalidToken } = require('../mock-data/errors');

const authMiddleware = require('../../middleware/auth');

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('authMiddleware', () => {
  it('should have a login authMiddleware', () => {
    expect(typeof authMiddleware).toBe('function');
  });

  it('should return "No token, authorization denied" error if there is no token in request', async () => {
    authMiddleware(req, res, next);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toStrictEqual(noTokenError);
  });

  it('should return "Token is not valid" error if token is not valid', async () => {
    req.headers['auth-token'] = 'test';
    authMiddleware(req, res, next);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toStrictEqual(invalidToken);
  });

  it('should call next() if token has been provided and valid', async () => {
    req.headers['auth-token'] = createdUser.token;

    jwt.verify = jest.fn();
    jwt.verify.mockReturnValue(createdUser.id);

    authMiddleware(req, res, next);

    expect(next).toBeCalled();
  });
});
