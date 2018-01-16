import {
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_ERROR
} from 'results.actionType';

export const setVideos = videos => {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    videos
  };
};

export const fetchVideosError = error => {
  return {
    type: FETCH_VIDEOS_ERROR,
    error
  };
};
