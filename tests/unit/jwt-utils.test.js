const { generateHashedPassword, generateToken } = require('../../utils/jwt');
const { user, createdUser } = require('../mock-data/user');

describe('JWT utils', () => {
  it('should generate hashed password', async () => {
    const hashedPassword = await generateHashedPassword(user.password);

    expect(typeof hashedPassword).toBe('string');
  });

  it('should return jsonwebtoken', async () => {
    const payload = {
      user: {
        id: createdUser.id,
      },
    };

    const response = await generateToken(payload);

    expect(typeof response.token).toBe('string');
  });
});
