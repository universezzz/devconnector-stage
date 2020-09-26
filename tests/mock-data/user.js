const invalidRegisterData = {
  name: '',
  email: 'gmail.com',
  password: '313',
};

const invalidLoginData = {
  email: '',
  password: '',
};

const user = {
  name: 'Artsiom',
  email: 'universezxcv1@gmail.com',
  password: 'testpassword',
};

const createdUser = {
  id: '5edd143adc3a2d56186d8681',
  name: 'Artsiom',
  email: 'universezxcv1@gmail.com',
  avatar: 'www.gravatar.com/avatar/29a1df4646cb3417',
  password: '$2a$10$K18CQRDnK/E6OKgg4rGP7u3kLVLFcZdx2A6IjjWhD1wj8eq8jQsP',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY2ZGI3ODk2ZjQyYjUyZWE4YTEyYzJiIn0sImlhdCI6MTYwMTAyNTkzMCwiZXhwIjoxNjAxMDYxOTMwfQ.loECy425HFOOfLKhxQTHiCpjajrVP0q7ICDcaXaxL0U',
};

module.exports = {
  user,
  invalidRegisterData,
  invalidLoginData,
  createdUser,
};
