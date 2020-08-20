import axios from 'axios';

import { profileTypes, authTypes, AppThunk } from './types';
import { setAlert } from './alert';
import { AppDispatch } from '../store';
import { ApiError } from '../shared/interfaces';


export const getCurrentProfile = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: profileTypes.GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getProfiles = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: profileTypes.GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getProfileById = (userId: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: profileTypes.GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getGithubRepos = (userName: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`/api/profile/github/${userName}`);

    dispatch({
      type: profileTypes.GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const createProfile = (formData: any, history: any, edit: boolean = false): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/profile', formData, config);

    dispatch({
      type: profileTypes.GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: ApiError) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const addExperience = (formData: any, history: any): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.patch('/api/profile/experience', formData, config);

    dispatch({
      type: profileTypes.UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Experience added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: ApiError) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const addEducation = (formData: any, history: any): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.patch('/api/profile/education', formData, config);

    dispatch({
      type: profileTypes.UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Education added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: ApiError) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const deleteExperience = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.delete(`api/profile/experience/${id}`);

    dispatch({
      type: profileTypes.UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Experience removed', 'success'));
  } catch (err) {
    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const deleteEducation = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.delete(`api/profile/education/${id}`);

    dispatch({
      type: profileTypes.UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Education removed', 'success'));
  } catch (err) {
    dispatch({
      type: profileTypes.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const deleteAccount = (): AppThunk => async (dispatch: AppDispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('api/profile');

      dispatch({ type: profileTypes.CLEAR_PROFILE });
      dispatch({ type: authTypes.ACCOUNT_DELETED });
    } catch (err) {
      dispatch({
        type: profileTypes.PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  }
};
