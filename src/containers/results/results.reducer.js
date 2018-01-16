import {FETCH_VIDEOS_SUCCESS,FETCH_VIDEOS_ERROR} from 'results.actionType';

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
    case FETCH_VIDEOS_ERROR:
      return [
        ...state,
        {
          error: action.error
        }
      ];

    default:
      return state;
  }
};

export default results;
