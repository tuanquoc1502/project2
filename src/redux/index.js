import { combineReducers } from 'redux';
import apiChartsReducer from './apiChartsReducer';
import apiWeatherReducer from './apiWeatherReducer';

const rootReducer = combineReducers({
  numberCharts: apiChartsReducer,
  allDataWeather: apiWeatherReducer,
});

export default rootReducer;
