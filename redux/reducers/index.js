import {combineReducers} from 'redux';
import queryReducer from './queryReducer';
import screenOrientationReducer from './screenOrientationReducer';

export default combineReducers({
  search_query: queryReducer,
  screen_orientation: screenOrientationReducer
})
