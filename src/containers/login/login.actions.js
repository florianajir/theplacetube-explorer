import {
  FETCH_USER_SUCCESS
} from 'login.actionType';

export const loginUser = user => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  };
};
