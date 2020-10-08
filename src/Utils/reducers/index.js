import { combineReducers } from 'redux'
import videos , * as videoSelectors from './videos'

const reducer = combineReducers({
  videos
})

export default reducer

export const getVideos = (state) => videoSelectors.getVideos(state.videos)
export const getHasVideoError = (state) => videoSelectors.getHasError(state.videos)
export const getVideoErrorDetail = (state) => videoSelectors.getErrorDetail(state.videos)
