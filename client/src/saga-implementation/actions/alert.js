import { createAction } from 'redux-actions';

import { alert } from './types';

const setAlertRequest = createAction(alert.SET_ALERT_REQUEST);
const setAlertSuccess = createAction(alert.SET_ALERT_SUCCESS);
const removeAlertSuccess = createAction(alert.REMOVE_ALERT_SUCCESS);

export {
  setAlertRequest,
  setAlertSuccess,
  removeAlertSuccess
};