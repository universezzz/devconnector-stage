import { postTypes } from '../actions/types.ts';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case postTypes.GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case postTypes.GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case postTypes.ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    case postTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    case postTypes.POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case postTypes.UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId
            ? {
                ...post,
                likes: payload.likes,
              }
            : post
        ),
        loading: false,
      };
    case postTypes.ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: payload,
        },
        loading: false,
      };
    case postTypes.REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}
