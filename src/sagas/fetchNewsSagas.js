import {call, put} from 'redux-saga/effects';
import {fetchNews,fetchNewsDetail} from '../API/news';

export function* fetchNewsWorker() {
  const response = yield call(fetchNews);
  yield put({ type: 'FETCH_NEWS_SUCCESS', response });
}

export function* fetchNewsDetailWorker() {
  const response = yield call(fetchNewsDetail);
  console.log(response);
  yield put({ type: 'FETCH_NEWS_DETAIL_SUCCESS', response });
}
