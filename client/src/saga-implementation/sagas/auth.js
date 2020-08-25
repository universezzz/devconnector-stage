import { call, put, takeEvery } from 'redux-saga/effects';

import { auth } from '../actions/types';
import * as actions from '../actions/auth';

import {
  loadUserRequest,
  loginRequest,
  registerRequest,
} from '../services/auth';

function* loadUser() {
  try {
    const response = yield call(loadUserRequest);

    yield put(actions.loadUserSuccess(response));
  } catch (err) {
    yield put(actions.loadUserFailure(err));
  }
}

function* register({ payload }) {
  try {
    const response = yield call(registerRequest, payload);

    yield put(actions.registerSuccess(response));
  } catch (err) {
    yield put(actions.registerFailure(err));
  }
}

function* login({ payload }) {
  try {
    const response = yield call(loginRequest, payload);

    yield put(actions.loginSuccess(response));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* logout() {
  yield put(actions.logoutSuccess());
  // profile
}

export default function* () {
  yield takeEvery(auth.LOAD_USER_REQUEST, loadUser);
  yield takeEvery(auth.REGISTER_REQUEST, register);
  yield takeEvery(auth.LOGIN_REQUEST, login);
  yield takeEvery(auth.LOG_OUT_REQUEST, logout);
}
