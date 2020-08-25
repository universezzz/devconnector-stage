import { fork, all } from 'redux-saga/effects';

import auth from './auth';

export default function* () {
  yield all([fork(auth)]);
}
