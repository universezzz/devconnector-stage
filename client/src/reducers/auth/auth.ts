import { Reducer } from "redux";

import { authTypes } from '../../actions/types.ts';
import { AuthState, UserActions } from './auth.interface';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state: AuthState = initialState, action: any): AuthState {
  const { type, payload } = action;

  switch (type) {
    case authTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case authTypes.REGISTER_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
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
