import { handleActions } from 'redux-actions';

import { alert } from '../actions/types';

const initialState = [];

const setAlert = (state, { payload }) => [...state, payload];

const removeAlert = (state, { payload }) =>
  state.filter((alert) => alert.id !== payload.id);

export default handleActions(
  {
    [alert.SET_ALERT_SUCCESS]: setAlert,
    [alert.REMOVE_ALERT_SUCCESS]: removeAlert,
  },
  initialState
);
