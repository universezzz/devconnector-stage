import { authTypes } from '../../thunks/types';

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

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: AuthUser | null;
};

export type AuthActions =
  | { type: authTypes.USER_LOADED; payload: AuthUser }
  | { type: authTypes.REGISTER_SUCCESS; payload: Token }
  | { type: authTypes.LOGIN_SUCCESS; payload: Token }
  | { type: authTypes.REGISTER_FAILURE }
  | { type: authTypes.LOGIN_FAILURE }
  | { type: authTypes.AUTH_ERROR }
  | { type: authTypes.LOG_OUT }
  | { type: authTypes.ACCOUNT_DELETED };