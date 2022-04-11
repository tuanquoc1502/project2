import { combineReducers } from 'redux';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  numberCharts: apiReducer,
});

export default rootReducer;
