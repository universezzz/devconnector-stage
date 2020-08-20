import { authTypes } from '../../thunks/types';

import { AuthState, AuthActions } from './auth.interface';

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case authTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case authTypes.REGISTER_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case authTypes.REGISTER_FAILURE:
    case authTypes.LOGIN_FAILURE:
    case authTypes.AUTH_ERROR:
    case authTypes.LOG_OUT:
    case authTypes.ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}
