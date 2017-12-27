import {
  CLOSE_VIDEO,
  PLAY_VIDEO,
  SET_LOCATION,
  SET_ORDER,
  SET_PUBLISHED_AFTER,
  SET_RADIUS,
  SET_SEARCH,
  SET_VIDEO_CATEGORY,
  FETCH_VIDEOS_SUCCESS,
  SET_VIEWPORT,
  FETCH_USER_SUCCESS
} from '../constants/ActionTypes';

export const setLocation = location => {
  return {
    type: SET_LOCATION,
    location
  };
};

export const setRadius = radius => {
  return {
    type: SET_RADIUS,
    radius
  };
};

export const setViewport = viewport => {
  return {
    type: SET_VIEWPORT,
    viewport
  };
};

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

export const playVideo = video => {
  return {
    type: PLAY_VIDEO,
    video
  };
};

export const closePlayer = () => {
  return {
    type: CLOSE_VIDEO
  };
};

export const setVideos = videos => {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    videos
  };
};

export const loginUser = user => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  };
};
