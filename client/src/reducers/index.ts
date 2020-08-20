import { useSelector, TypedUseSelectorHook  } from 'react-redux';
import { combineReducers } from 'redux';

import alert from './alert/alert';
import auth from './auth/auth';
import profile from './profile/profile';
import post from './post/post';

export const rootReducer = combineReducers({
  alert,
  auth,
  profile,
  post
});

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;