import { combineReducers } from 'redux';
import userReducer from './reducer';
import pageControl from './pageControl';

const rootReducer = combineReducers({
  user: userReducer,
  pageControl: pageControl,
});

export default rootReducer;
