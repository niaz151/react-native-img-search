import {combineReducers} from 'redux';
import queryReducer from './queryReducer';
import screenOrientationReducer from './screenOrientationReducer';
import imageReducer from './imageReducer';

export default combineReducers({
  image_data: imageReducer,
  search_query: queryReducer,
  screen_orientation: screenOrientationReducer
})
