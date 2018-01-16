import reducer from './combineReducers';
import {createStore} from 'redux/index';

let store = createStore(reducer);

export default store;
