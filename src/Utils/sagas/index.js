import { fork, all } from 'redux-saga/effects'

import { watchGetVideosStarted } from './videos'

function* mainSaga(){
  yield all([
    fork(watchGetVideosStarted),
  ])
}

export default mainSaga;
