import {FETCH_USER_SUCCESS} from 'login.actionType';

const login = (state = {}, action) => {
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

export default login;
