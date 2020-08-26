import { call, put, takeEvery } from 'redux-saga/effects';

import { profile } from '../actions/types';
import * as profileActions from '../actions/profile';
import * as alertActions from '../actions/alert';

import { getProfileRequest, getProfilesRequest } from '../services/profile';

function* getProfile() {
  try {
    const response = yield call(getProfileRequest);

    yield put(profileActions.getProfileSuccess(response));
  } catch (err) {
    yield put(profileActions.getProfileFailure(err));
  }
}

function* getProfiles() {
  try {
    const response = yield call(getProfilesRequest);

    yield put(profileActions.getProfilesSuccess(response));
  } catch (err) {
    yield put(profileActions.getProfilesFailure(err));
  }
}

function* getProfileById() {}

function* getGithubRepos() {}

function* createProfile() {}

function* addExperience() {}

function* addEducation() {}

function* deleteExperience() {}

function* deleteAccount() {}

export default function* () {
  yield takeEvery(profile.GET_PROFILE_REQUEST, getProfile);
  yield takeEvery(profile.GET_PROFILES_REQUEST, getProfiles);
  // yield takeEvery(auth.REGISTER_REQUEST, register);
  // yield takeEvery(auth.LOGIN_REQUEST, login);
  // yield takeEvery(auth.LOG_OUT_REQUEST, logout);
}
