import axios from 'axios'
import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import * as selectors from '../reducers'
import * as types from '../types/videos'
import * as actions from '../actions/videos'
import youtube from '../youtube'
const API_KEY = 'AIzaSyDnF2ERJw0H9Ha-_C6u3qll-wfe-0qM96A'

function* getVideosStarted(action){
  try{
    const response = youtube.get('/search',{
      params: {
        q: action.payload
      }
    }).then(res => console.log(res)).catch(err => console.log(err))      
  }catch (error ){
    yield put(actions.failFetchingYoutubeAPI(error))
  }
}

export function* watchGetVideosStarted(){
  yield takeEvery(
    types.FETCH_YOUTUBEAPI_STARTED,
    getVideosStarted
  )
}
  