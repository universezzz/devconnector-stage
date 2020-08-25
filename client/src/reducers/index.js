import { combineReducers } from 'redux';

import alert from './alert';
// import auth from './auth';
import profile from './profile';
import post from './post';

// saga
import auth from '../saga-implementation/reducers/auth';
// saga

export default combineReducers({
  alert,
  // auth,
  profile,
  post,
  auth
});
