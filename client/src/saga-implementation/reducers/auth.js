import { handleActions } from 'redux-actions';

import { auth } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null
};

const loadUserSuccess = (state, { payload }) => ({
  ...state,
  isAuthenticated: true,
  loading: false,
  user: payload,
});

const authSuccess = (state, { payload }) => ({
  ...state,
  token: payload,
  isAuthenticated: true,
  loading: false,
});

const authFailure = (state, { payload }) => ({
  ...state,
  token: null,
  isAuthenticated: false,
  loading: false,
  user: null,
  error: payload
});

export default handleActions(
  {
    [auth.LOAD_USER_SUCCESS]: loadUserSuccess,
    [auth.LOAD_USER_FAILURE]: authFailure,
    [auth.REGISTER_SUCCESS]: authSuccess,
    [auth.REGISTER_FAILURE]: authFailure,
    [auth.LOGIN_SUCCESS]: authSuccess,
    [auth.LOGIN_FAILURE]: authFailure,
    [auth.LOG_OUT_SUCCESS]: authFailure,
    [auth.ACCOUNT_DELETED_SUCCESS]: authFailure,
    [auth.ACCOUNT_DELETED_FAILURE]: loadUserSuccess,
    [auth.AUTH_ERROR]: authFailure
  },
  initialState
);
