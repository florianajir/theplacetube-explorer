import {
  SET_ORDER,
  SET_PUBLISHED_AFTER,
  SET_SEARCH,
  SET_VIDEO_CATEGORY,
} from 'search.actionType';

export const setOrder = order => {
  return {
    type: SET_ORDER,
    order
  };
};

export const setVideoCategory = category => {
  return {
    type: SET_VIDEO_CATEGORY,
    category
  };
};

export const setSearch = search => {
  return {
    type: SET_SEARCH,
    search
  };
};

export const setPublishedAfter = publishedAfter => {
  return {
    type: SET_PUBLISHED_AFTER,
    publishedAfter
  };
};
