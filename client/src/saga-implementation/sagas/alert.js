import { call, put, takeEvery, delay } from 'redux-saga/effects';

import uuid from 'uuid/v4';

import { alert } from '../actions/types';
import * as actions from '../actions/alert';

function* setAlert({ payload: { msg, alertType, timeout = 5000 } }) {
  const id = uuid();

  yield put(actions.setAlertSuccess({ msg, alertType, id }));

  yield delay(timeout);

  yield put(actions.removeAlertSuccess({ id }));
}

export default function* () {
  yield takeEvery(alert.SET_ALERT_REQUEST, setAlert);
}
