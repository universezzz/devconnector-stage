import { alertTypes } from '../actions/types.ts';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case alertTypes.SET_ALERT:
      return [...state, payload];
    case alertTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
