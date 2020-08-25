import { httpService } from './httpService';

import setAuthToken from '../../utils/setAuthToken';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loadUserRequest = async () => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const { data } = await httpService.get({ url: links.loadUserRoute });

    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export const registerRequest = async (formData) => {
  try {
    const { data: { token } } = await httpService.post({
      url: links.registrationRoute,
      data: formData,
      config,
    }); 

    localStorage.setItem('token', token);

    return token;
  } catch (err) {
    throw err.response.data;
  }
};

export const loginRequest = async (formData) => {
  try {
    const { data: { token } } = await httpService.post({
      url: links.loginRoute,
      data: formData,
      config,
    }); 

    localStorage.setItem('token', token);

    return token;
  } catch (err) {
    throw err.response.data;
  }
};
