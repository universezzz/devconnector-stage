import uuid from 'uuid/v4';
import { alertTypes } from './types.ts';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuid();

  dispatch({
    type: alertTypes.SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });

  setTimeout(() => dispatch({ type: alertTypes.REMOVE_ALERT, payload: id }), timeout);
};
