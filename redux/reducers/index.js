import {combineReducers} from 'redux';
import screenOrientationReducer from './screenOrientationReducer';

export default combineReducers({
  screen_orientation: screenOrientationReducer
})

