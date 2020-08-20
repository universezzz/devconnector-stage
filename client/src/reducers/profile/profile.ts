import { profileTypes } from '../../thunks/types';
import { ProfileState, ProfileActions } from './profile.interface';

const initialState: ProfileState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: null,
};

export default function (state: ProfileState = initialState, action: ProfileActions) {
  switch (action.type) {
    case profileTypes.GET_PROFILE:
    case profileTypes.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case profileTypes.GET_PROFILES:
      return {
        ...state,
        profile: null,
        profiles: action.payload,
        loading: false,
      };
    case profileTypes.PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
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
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
