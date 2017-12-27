import {combineReducers} from 'redux';
import map from './map';
import player from './player';
import results from './results';
import search from './search';
import user from './user';

const explorer = combineReducers({
  map,
  player,
  results,
  search,
  user
});

export default explorer;
