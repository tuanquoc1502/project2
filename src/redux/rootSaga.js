import { call, put, takeEvery } from 'redux-saga/effects';
import fetchData from './api';
import { API_FETCH_FAILED, CALL_CHARTS } from '../contansts/contansts';

function* rootSaga() {
  yield takeEvery('FETCH_API_REQUEST', handleFiveApiRequest);
}

function* handleFiveApiRequest(action) {
  try {
    const data = yield call(fetchData, action.payload.nameCity);
    data.id = action.payload.id;
    yield put(CALL_CHARTS(data));
  } catch (e) {
    yield put(API_FETCH_FAILED());
  }
}

export default rootSaga;
