const request = require('supertest');
const server = require('../../server');

const { user, invalidLoginData } = require('../mock-data/user');

const {
  loginValidationErrors,
  invalidCredentialsError,
} = require('../mock-data/errors');

const endpoint = '/api/auth';

describe(endpoint, () => {
  it('GET: get actual user', async () => {
    const {
      body: { token },
    } = await request(server).post('/api/users').send(user);

    const response = await request(server)
      .get(endpoint)
      .set('auth-token', token);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(user.name);
    expect(response.body.email).toBe(user.email);
  });

  it('Post: login, invalid data', async () => {
    const response = await request(server)
      .post(endpoint)
      .send(invalidLoginData);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(loginValidationErrors);
  });

  it('Post: login, invalid credentials: user not found', async () => {
    const response = await request(server).post(endpoint).send(user);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(invalidCredentialsError);
  });

  it('Post: login, invalid credentials: passwords do not match', async () => {
    await request(server).post('/api/users').send(user);
    const response = await request(server)
      .post(endpoint)
      .send({ email: user.email, password: 'invalid password' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(invalidCredentialsError);
  });

  it('Post: login, successful login', async () => {
    await request(server).post('/api/users').send(user);
    const response = await request(server).post(endpoint).send(user);

    expect(response.statusCode).toBe(200);
    expect(typeof response.body.token).toBe('string');
  });
});
