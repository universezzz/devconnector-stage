import { ApiError } from '../../shared/interfaces';
import { postTypes } from '../../thunks/types';

interface Like {
  _id: string;
  user: string;
}

interface LikeState {
  postId: string;
  likes: Like[];
}

export interface Comment {
  _id: string;
  date: string;
  text: string;
  name: string;
  avatar: string;
  user: string;
}

export interface Post {
  _id: string;
  text: string;
  name: string;
  avatar: string;
  user: string;
  likes: Like[];
  comments: Comment[];
  date: string;
}

export interface PostState {
  post: Post | null,
  posts: Post[],
  loading: boolean,
  error: ApiError | null,
}

export type PostActions =
  | { type: postTypes.GET_POSTS; payload: Post[] }
  | { type: postTypes.GET_POST; payload: Post }
  | { type: postTypes.ADD_POST; payload: Post }
  | { type: postTypes.DELETE_POST; payload: string }
  | { type: postTypes.POST_ERROR; payload: ApiError }
  | { type: postTypes.UPDATE_LIKES; payload: LikeState }
  | { type: postTypes.ADD_COMMENT; payload: Comment[] }
  | { type: postTypes.REMOVE_COMMENT; payload: string };