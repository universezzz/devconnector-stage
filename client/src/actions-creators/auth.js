import { createAction } from 'redux-actions';

import { auth } from './types';

const loadUserRequest = createAction(auth.LOAD_USER_REQUEST);

const loadUserSuccess = createAction(auth.LOAD_USER_SUCCESS);

const loadUserFailure = createAction(auth.LOAD_USER_FAILURE);

export {
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure
};

// USER_LOADED
// AUTH_ERROR,