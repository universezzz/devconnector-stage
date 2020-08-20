import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Action } from 'redux';

export type AppThunk<ReturnType = void> =
  ThunkAction<ReturnType, RootState, unknown, Action<string>
  >;

export enum alertTypes {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT'
}

export enum authTypes {
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
  USER_LOADED = 'USER_LOADED',
  AUTH_ERROR = 'AUTH_ERROR',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOG_OUT = 'LOG_OUT',
  ACCOUNT_DELETED = 'ACCOUNT_DELETED',
}

export enum profileTypes {
  GET_PROFILE = 'GET_PROFILE',
  GET_PROFILES = 'GET_PROFILES',
  PROFILE_ERROR = 'PROFILE_ERROR',
  CLEAR_PROFILE = 'CLEAR_PROFILE',
  UPDATE_PROFILE = 'UPDATE_PROFILE',
  GET_REPOS = 'GET_REPOS',
}

export enum postTypes {
  GET_POSTS = 'GET_POSTS',
  GET_POST = 'GET_POST',
  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST',
  POST_ERROR = 'POST_ERROR',
  UPDATE_LIKES = 'UPDATE_LIKES',
  ADD_COMMENT = 'ADD_COMMENT',
  REMOVE_COMMENT = 'REMOVE_COMMENT'
}