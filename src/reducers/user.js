import {FETCH_USER_SUCCESS} from '../constants/ActionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return [
        ...state,
        action.user
      ];
    default:
      return state;
  }
};

export default user;
