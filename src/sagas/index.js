import { takeLatest } from 'redux-saga/effects';
import { fetchNewsWorker,fetchNewsDetailWorker } from './fetchNewsSagas';

export default function* rootSagas() {
  yield [ 
    takeLatest('FETCH_NEWS', fetchNewsWorker),
    takeLatest('FETCH_NEWS_DETAIL', fetchNewsDetailWorker)
  ];
}
