import axios from 'axios';

import { setAlert } from './alert';
import { postTypes } from './types.ts';

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: postTypes.GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);

    dispatch({
      type: postTypes.GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/posts', formData, config);

    dispatch({
      type: postTypes.ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert('Post created', 'success'));
  } catch (err) {
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch({
      type: postTypes.DELETE_POST,
      payload: postId,
    });

    dispatch(setAlert('Post removed', 'success'));
  } catch (err) {
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/posts/like/${postId}`);

    dispatch({
      type: postTypes.UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        status: err.response.status,
      },
    });
  }
};

export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/posts/unlike/${postId}`);

    dispatch({
      type: postTypes.UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        status: err.response.status,
      },
    });
  }
};

export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.patch(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: postTypes.ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('Comment added', 'success'));
  } catch (err) {
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const removeComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.patch(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: postTypes.REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert('Comment removed', 'success'));
  } catch (err) {
    dispatch({
      type: postTypes.POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
