import {SET_LOCATION, SET_RADIUS, SET_VIEWPORT} from 'map.actionType';

const initialState = {
  location: null,
  radius: null,
  viewport: null
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return [
        ...state,
        {
          location: action.location
        }
      ];
    case SET_RADIUS:
      return [
        ...state,
        {
          radius: action.radius
        }
      ];
    case SET_VIEWPORT:
      return [
        ...state,
        {
          viewport: action.viewport
        }
      ];
    default:
      return state;
  }
};

export default map;
