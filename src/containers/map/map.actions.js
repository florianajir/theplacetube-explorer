import {
  SET_LOCATION,
  SET_RADIUS,
  SET_VIEWPORT,
} from 'map.actionType';

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

