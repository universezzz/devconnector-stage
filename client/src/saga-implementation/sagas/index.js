import { fork, all } from 'redux-saga/effects';

import auth from './auth';
import alert from './alert';
import profile from './profile';

export default function* () {
  yield all([fork(auth), fork(alert), fork(profile)]);
}
