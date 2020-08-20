import { v4 as uuid } from 'uuid';
import { alertTypes } from './types';
import { AppDispatch } from '../store';

export const setAlert = (msg: string, alertType: string, timeout: number = 5000) => (dispatch: AppDispatch) => {
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
