import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import { authTypes, profileTypes, AppThunk } from './types';
import { AppDispatch } from '../store';
import { RegisterData } from '../components/auth/Register/Register/Register.interface';
import { ApiError } from '../shared/interfaces';
import { LoginData } from '../components/auth/Login/Login.interface';

export const loadUser = (): AppThunk => async (dispatch: AppDispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: authTypes.USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: authTypes.AUTH_ERROR,
    });
  }
};

export const register = ({ name, email, password }: RegisterData): AppThunk => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: authTypes.REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: ApiError) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: authTypes.REGISTER_FAILURE,
    });
  }
};

export const login = ({ email, password }: LoginData): AppThunk => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: authTypes.LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: ApiError) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: authTypes.LOGIN_FAILURE,
    });
  }
};

export const logout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({ type: authTypes.LOG_OUT });
  dispatch({ type: profileTypes.CLEAR_PROFILE });
};
