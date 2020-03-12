// Get profile github
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_AIL = 'GET_PROFILE_AIL';

export const getProfileRequest = username => {
  return {type: GET_PROFILE_REQUEST, payload: {username}};
};
export const getProfileSuccess = data => {
  return {type: GET_PROFILE_SUCCESS, payload: {data}};
};
export const getProfileFail = err => {
  return {type: GET_PROFILE_AIL, payload: {err}};
};
