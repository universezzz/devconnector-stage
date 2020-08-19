import { authTypes } from '../../actions/types';

interface AuthUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
}

interface Token {
  token: string;
}

// export type AuthPayload = AuthUser | Token;

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: AuthUser | null;
};

export interface UserLoadedAction {
  type: authTypes.USER_LOADED,
  payload: AuthUser
};

export interface AuthSuccessAction {
  type: authTypes.REGISTER_SUCCESS | authTypes.LOGIN_SUCCESS,
  payload: Token
}

export interface AuthFailureAction {
  type: authTypes.REGISTER_FAILURE
  | authTypes.LOGIN_FAILURE
  | authTypes.AUTH_ERROR
  | authTypes.LOG_OUT
  | authTypes.ACCOUNT_DELETED,
}

export type UserActions = AuthFailureAction | UserLoadedAction | AuthSuccessAction;

// export interface UserActions {
//   type: authTypes;
//   payload?: AuthUser | Token
// };

// export type UserActions =
//   | { type: authTypes.USER_LOADED; payload: AuthUser }
//   | { type: authTypes.REGISTER_SUCCESS; payload: { token: string } }
//   | { type: authTypes.LOGIN_SUCCESS; payload: { token: string } }
//   | { type: authTypes.REGISTER_FAILURE }
//   | { type: authTypes.LOGIN_FAILURE }
//   | { type: authTypes.AUTH_ERROR }
//   | { type: authTypes.LOG_OUT }
//   | { type: authTypes.ACCOUNT_DELETED };