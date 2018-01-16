import {CLOSE_VIDEO, PLAY_VIDEO} from 'player.actionType';

const initialState = {
  video: null
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_VIDEO:
      return [
        ...state,
        {
          video: action.video
        }
      ];
    case CLOSE_VIDEO:
      return [
        ...state,
        {
          video: null
        }
      ];
    default:
      return state;
  }
};

export default player;
