import {
  CLOSE_VIDEO,
  PLAY_VIDEO
} from './player.actionType';

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
