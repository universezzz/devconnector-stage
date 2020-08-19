import { profileTypes } from '../actions/types.ts';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case profileTypes.GET_PROFILE:
    case profileTypes.UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case profileTypes.GET_PROFILES:
      return {
        ...state,
        profile: null,
        profiles: payload,
        loading: false,
      };
    case profileTypes.PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case profileTypes.CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    case profileTypes.GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    default:
      return state;
  }
}
