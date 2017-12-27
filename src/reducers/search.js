import {SET_ORDER, SET_PUBLISHED_AFTER, SET_SEARCH, SET_VIDEO_CATEGORY} from '../constants/ActionTypes';
import {ORDER_VIEWCOUNT} from '../constants/YoutubeApi';

const initialState = {
  order: ORDER_VIEWCOUNT,
  category: null,
  publishedAfter: null,
  text: null
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return [
        ...state,
        {
          order: action.order
        }
      ];
    case SET_VIDEO_CATEGORY:
      return [
        ...state,
        {
          category: action.category
        }
      ];
    case SET_SEARCH:
      return [
        ...state,
        {
          text: action.search
        }
      ];
    case SET_PUBLISHED_AFTER:
      return [
        ...state,
        {
          publishedAfter: action.publishedAfter
        }
      ];
    default:
      return state;
  }
};

export default search;
