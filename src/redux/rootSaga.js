import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { API_FETCH_FAILED, CALL_CHARTS, CALL_WEATHER, CALL_LOADING } from '../contansts/contansts';
import fetchData from './api';

function* rootSaga() {
  yield takeEvery('FETCH_API_CHART_REQUEST', handleApiChartRequest);
  yield takeEvery('FETCH_API_WEATHER_REQUEST', handleApiWeatherRequest);
}

function* handleApiChartRequest(action) {
  try {
    const data = yield call(fetchData, action.payload.nameCity);
    data.id = action.payload.id;

    yield put(CALL_LOADING());
    yield delay(1000);
    yield put(CALL_CHARTS(data));
  } catch (e) {
    yield put(API_FETCH_FAILED());
  }
}

function* handleApiWeatherRequest(action) {
  try {
    const data = yield call(fetchData, action.payload);
    data.id = action.payload.id;
    yield delay(500);
    yield put(CALL_WEATHER(data));
  } catch (e) {
    yield put(API_FETCH_FAILED());
  }
}

export default rootSaga;
