import { call, put, takeEvery } from 'redux-saga/effects';

import setAuthToken from '../utils/setAuthToken';

import { LOAD_USER } from '../actions/types';
import * as actions from '../actions-creators/auth';

function* loadUser() {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const res = await axios.get('/api/auth');

    yield put();

  } catch (err) {

  }
}

export default function* () {
  yield takeEvery(LOAD_USER, loadUser);
}
