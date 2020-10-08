import {combineReducers} from 'redux';
import * as types from '../types/videos'

const videos = (state = [] , action) => {
  switch (action.type){
    case types.FETCH_YOUTUBEAPI_FINISHED:{
      return [
        ...action.payload
      ]
    }
    default: {
      return state
    }
  }
  
}

const isFetching = (state = false , action) => {
  switch (action.type){
    case types.FETCH_YOUTUBEAPI_STARTED:{
      return true
    }
    default: {
      return false
    }
  }
}

const errorBody = {
  isError : false,
  detail : ''
}


const error = (state = errorBody , action) => {
  switch (action.type){
    case types.FETCH_YOUTUBEAPI_FAILED:{
      return {
        isError : true,
        detail: action.payload
      }
    }
    default: {
      return {
        isError : false,
        detail: ''
      }
    }
  }
}

export default combineReducers({
  videos,
  error
})

export const getVideos = (state) => state.videos;
export const getHasError = (state) => state.error.isError;
export const getErrorDetail = (state) => state.error.detail;
