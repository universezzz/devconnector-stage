import { call, put, takeEvery } from 'redux-saga/effects';

import { auth } from '../actions/types';
import * as authActions from '../actions/auth';
import * as alertActions from '../actions/alert';

import {
  loadUserRequest,
  loginRequest,
  registerRequest,
} from '../services/auth';

function* loadUser() {
  try {
    const response = yield call(loadUserRequest);

    yield put(authActions.loadUserSuccess(response));
  } catch (err) {
    yield put(authActions.loadUserFailure(err));
  }
}

function* register({ payload }) {
  try {
    const response = yield call(registerRequest, payload);

    yield put(authActions.registerSuccess(response));
    yield put(authActions.loadUserRequest());
  } catch (err) {
    yield put(authActions.registerFailure(err));

    for (const error of err.errors) {
      yield put(
        alertActions.setAlertRequest({ msg: error.msg, alertType: 'danger' })
      );
    }
  }
}

function* login({ payload }) {
  try {
    const response = yield call(loginRequest, payload);

    yield put(authActions.loginSuccess(response));

    yield put(authActions.loadUserRequest());
  } catch (err) {
    for (const error of err.errors) {
      yield put(
        alertActions.setAlertRequest({ msg: error.msg, alertType: 'danger' })
      );
    }

    yield put(authActions.loginFailure(err));
  }
}

function* logout() {
  localStorage.removeItem('token');
  yield put(authActions.logoutSuccess());
  // profile
}

export default function* () {
  yield takeEvery(auth.LOAD_USER_REQUEST, loadUser);
  yield takeEvery(auth.REGISTER_REQUEST, register);
  yield takeEvery(auth.LOGIN_REQUEST, login);
  yield takeEvery(auth.LOG_OUT_REQUEST, logout);
}
