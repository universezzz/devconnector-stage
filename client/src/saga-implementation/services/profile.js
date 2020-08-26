import { httpService } from './httpService';

import { links } from '../utils/constants';

export const getProfileRequest = async () => {
  try {
    const { data } = await httpService.get({ url: links.getCurrentProfile });

    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getProfilesRequest = async () => {
  try {
    const { data } = await httpService.get({ url: links.getProfiles });

    return data;
  } catch (err) {
    throw err.response.data;
  }
};
