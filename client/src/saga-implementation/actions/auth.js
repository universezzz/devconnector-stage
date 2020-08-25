import { createAction } from 'redux-actions';

import { auth } from './types';

const loadUserRequest = createAction(auth.LOAD_USER_REQUEST);
const loadUserSuccess = createAction(auth.LOAD_USER_SUCCESS);
const loadUserFailure = createAction(auth.LOAD_USER_FAILURE);

const registerRequest = createAction(auth.REGISTER_REQUEST);
const registerSuccess = createAction(auth.REGISTER_SUCCESS);
const registerFailure = createAction(auth.REGISTER_FAILURE);

const loginRequest = createAction(auth.LOGIN_REQUEST);
const loginSuccess = createAction(auth.LOGIN_SUCCESS);
const loginFailure = createAction(auth.LOGIN_FAILURE);

const logoutSuccess = createAction(auth.LOG_OUT_SUCCESS);

export {
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutSuccess
};

// USER_LOADED
// AUTH_ERROR,