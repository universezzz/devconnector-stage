import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth/auth.ts';
import profile from './profile';
import post from './post';

export const rootReducer = combineReducers({
  alert,
  auth,
  profile,
  post
});

export type RootState = ReturnType<typeof rootReducer>