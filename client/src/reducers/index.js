import { combineReducers } from 'redux';

// import alert from './alert';
// import auth from './auth';
import profile from './profile';
import post from './post';

// saga
import auth from '../saga-implementation/reducers/auth';
import alert from '../saga-implementation/reducers/alert';
import sagaProfile from '../saga-implementation/reducers/profile';
// saga

export default combineReducers({
  alert,
  // auth,
  profile,
  post,
  auth,
  sagaProfile
});
