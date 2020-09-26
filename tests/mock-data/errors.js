const registerValidationErrors = {
  errors: [
    { location: 'body', msg: 'Name is required', param: 'name', value: '' },
    {
      location: 'body',
      msg: 'Please include a valid email',
      param: 'email',
      value: 'gmail.com',
    },
    {
      location: 'body',
      msg: 'Please enter a password with 6 or more characters',
      param: 'password',
      value: '313',
    },
  ],
};

const loginValidationErrors = {
  errors: [
    {
      location: 'body',
      msg: 'Please include a valid email',
      param: 'email',
      value: '',
    },
    {
      location: 'body',
      msg: 'Please enter a password with 6 or more characters',
      param: 'password',
      value: '',
    },
  ],
};

const userAlreadyExistsError = { errors: [{ msg: 'User already exists' }] };

const invalidCredentialsError = { errors: [{ msg: 'Invalid credentials' }] };

const noTokenError = { msg: 'No token, authorization denied' };

const invalidToken = { msg: 'Token is not valid' };

module.exports = {
  registerValidationErrors,
  loginValidationErrors,
  userAlreadyExistsError,
  invalidCredentialsError,
  noTokenError,
  invalidToken,
};
