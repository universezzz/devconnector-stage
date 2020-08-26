import { createAction } from 'redux-actions';

import { profile } from './types';

const getProfileRequest = createAction(profile.GET_PROFILE_REQUEST);
const getProfileSuccess = createAction(profile.GET_PROFILE_SUCCESS);
const getProfileFailure = createAction(profile.GET_PROFILE_FAILURE);

const getProfilesRequest = createAction(profile.GET_PROFILES_REQUEST);
const getProfilesSuccess = createAction(profile.GET_PROFILES_SUCCESS);
const getProfilesFailure = createAction(profile.GET_PROFILES_FAILURE);

const clearProfileRequest = createAction(profile.CLEAR_PROFILE_REQUEST);
const clearProfileSuccess = createAction(profile.CLEAR_PROFILE_SUCCESS);
const clearProfileFailure = createAction(profile.CLEAR_PROFILE_FAILURE);

const updateProfileRequest = createAction(profile.UPDATE_PROFILE_REQUEST);
const updateProfileSuccess = createAction(profile.UPDATE_PROFILE_SUCCESS);
const updateProfileFailure = createAction(profile.UPDATE_PROFILE_FAILURE);

const deleteAccountRequest = createAction(profile.DELETE_ACCOUNT_REQUEST);
const deleteAccountSuccess = createAction(profile.DELETE_ACCOUNT_SUCCESS);
const deleteAccountFailure = createAction(profile.DELETE_ACCOUNT_FAILURE);

const getReposRequest = createAction(profile.GET_REPOS_REQUEST);
const getReposSuccess = createAction(profile.GET_REPOS_SUCCESS);
const getReposFailure = createAction(profile.GET_REPOS_FAILURE);

export {
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
  getProfilesRequest,
  getProfilesSuccess,
  getProfilesFailure,
  clearProfileRequest,
  clearProfileSuccess,
  clearProfileFailure,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
  deleteAccountRequest,
  deleteAccountSuccess,
  deleteAccountFailure,
  getReposRequest,
  getReposSuccess,
  getReposFailure,
};
