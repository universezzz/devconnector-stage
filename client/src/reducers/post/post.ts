import { postTypes } from '../../thunks/types';
import { PostActions, Post, PostState, Comment } from './post.interface';

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: null,
};

export default function (state: PostState = initialState, action: PostActions) {
  switch (action.type) {
    case postTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case postTypes.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case postTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    case postTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post._id !== action.payload),
        loading: false,
      };
    case postTypes.POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case postTypes.UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post: Post) =>
          post._id === action.payload.postId
            ? {
              ...post,
              likes: action.payload.likes,
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
          comments: action.payload,
        },
        loading: false,
      };
    case postTypes.REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post?.comments.filter(
            (comment: Comment) => comment._id !== action.payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}
