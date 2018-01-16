import {combineReducers} from 'redux';
import map from '../containers/map/map.reducer';
import player from '../containers/player/player.reducer';
import results from '../containers/results/results.reducer';
import search from '../containers/search/search.reducer';
import login from '../containers/login/login.reducer';

const reducer = combineReducers({
  map,
  player,
  results,
  search,
  login
});

export default reducer;
