import { ApiError } from '../../shared/interfaces';
import { profileTypes } from '../../thunks/types';

interface ProfileUser {
  _id: string;
  name: string;
  avatar: string;
}

interface Experience {
  _id: string;
  current: boolean;
  company: string;
  title: string;
  location: string;
  from: string;
  to: string | null;
  description: string;
}

interface Education {
  _id: string;
  current: boolean;
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to: string | null;
  description: string;
}

interface Profile {
  skills: string[];
  id: string;
  user: ProfileUser;
  company: string;
  website: string;
  location: string
  bio: string;
  status: string;
  githubusername: string;
  experience: Experience[];
  education: Education[];
  date: string;
}

interface ProfileUser {
  _id: string;
  name: string;
  avatar: string;
}

interface Repo {
  id: number;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

export interface ProfileState {
  profile: Profile | null;
  profiles: Profile[];
  repos: Repo[];
  loading: boolean;
  error: ApiError | null;
}

export type ProfileActions =
  | { type: profileTypes.GET_PROFILE; payload: Profile }
  | { type: profileTypes.UPDATE_PROFILE; payload: Profile }
  | { type: profileTypes.GET_PROFILES; payload: Profile[] }
  | { type: profileTypes.PROFILE_ERROR; payload: ApiError }
  | { type: profileTypes.CLEAR_PROFILE; payload?: any }
  | { type: profileTypes.GET_REPOS; payload: Repo[] };