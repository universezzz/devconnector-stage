import { alertTypes } from '../../thunks/types';
import { AlertState, AlertActions } from './alert.interface';

const initialState: AlertState[] = [];

export default function (state: AlertState[] = initialState, action: AlertActions) {
  switch (action.type) {
    case alertTypes.SET_ALERT:
      return [...state, action.payload];
    case alertTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
}
