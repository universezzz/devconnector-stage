const request = require('supertest');
const server = require('../../server');

const { user, invalidRegisterData } = require('../mock-data/user');

const {
  registerValidationErrors,
  userAlreadyExistsError,
} = require('../mock-data/errors');

const endpoint = '/api/users';

describe(endpoint, () => {
  it('Post: registration, invalid data', async () => {
    const response = await request(server)
      .post(endpoint)
      .send(invalidRegisterData);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(registerValidationErrors);
  });

  it('Post: registration, user already exists', async () => {
    await request(server).post(endpoint).send(user);
    const response = await request(server).post(endpoint).send(user);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(userAlreadyExistsError);
  });

  it('Post: registration, successful registration', async () => {
    const response = await request(server).post(endpoint).send(user);

    expect(response.statusCode).toBe(200);
    expect(typeof response.body.token).toBe('string');
  });
});
