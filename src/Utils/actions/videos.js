import * as types from '../types/videos'

export const startFetchingYoutubeAPI = (data) => ({
  tpye : types.FETCH_YOUTUBEAPI_STARTED,
  payload: {
    data
  },
})
export const finishFetchingYoutubeAPI = (response) => ({
  tpye : types.FETCH_YOUTUBEAPI_FINISHED,
  payload: {
    ...response
  },
})
export const failFetchingYoutubeAPI = (error) => ({
  tpye : types.FETCH_YOUTUBEAPI_FAILED,
  payload: {
    error,
  },
})