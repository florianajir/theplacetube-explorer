import {FETCH_VIDEOS_SUCCESS} from '../constants/ActionTypes';

const initialState = {
  videos: []
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      return [
        ...state,
        {
          videos: action.videos
        }
      ];
    default:
      return state;
  }
};

export default results;
