import { alertTypes } from '../../thunks/types';

export interface AlertState {
  msg: string;
  alertType: string;
  id: string;
}

export type AlertActions = 
  | { type: alertTypes.SET_ALERT, payload: AlertState }
  | { type: alertTypes.REMOVE_ALERT, payload: string };