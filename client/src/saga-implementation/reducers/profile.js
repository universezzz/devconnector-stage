import { handleActions } from 'redux-actions';

import { profile } from '../actions/types';
import { getReposFailure } from '../actions/profile';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const getProfileSuccess = (state, { payload }) => ({
  ...state,
  profile: payload,
  loading: false,
});

const getProfilesSuccess = (state, { payload }) => ({
  ...state,
  profile: null,
  profiles: payload,
  loading: false,
});

const clearProfileSuccess = (state) => ({
  ...state,
  profile: null,
  repos: [],
  loading: false,
});

const profileFailure = (state, { payload }) => ({
  ...state,
  error: payload,
  loading: false,
});

const getReposSuccess = (state, { payload }) => ({
  ...state,
  repos: payload,
  loading: false,
});

export default handleActions(
  {
    [profile.GET_PROFILE_SUCCESS]: getProfileSuccess,
    [profile.GET_PROFILE_FAILURE]: profileFailure,
    [profile.GET_PROFILES_SUCCESS]: getProfilesSuccess,
    [profile.GET_PROFILES_FAILURE]: profileFailure,
    [profile.UPDATE_PROFILE_SUCCESS]: getProfileSuccess,
    [profile.UPDATE_PROFILE_FAILURE]: profileFailure,
    [profile.CLEAR_PROFILE_SUCCESS]: clearProfileSuccess,
    [profile.GET_REPOS_SUCCESS]: getReposSuccess,
    [profile.GET_REPOS_FAILURE]: profileFailure,
  },
  initialState
);
