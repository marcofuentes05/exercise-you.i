import React , { useState } from 'react';
import { connect } from 'react-redux';
import * as videosActions from '../../Utils/actions/videos';
import ReactPlayer from 'react-player'

const Player = ({ url }) => {
    const [isPlaying, setIsPlaying] = useState(false)
  return(
    <div>
      <ReactPlayer url={url} width="100%" height="100%" playing={isPlaying} />
      <button onClick={ ( ) => setIsPlaying(!isPlaying) }
      >
      Play/Pause
      </button>
    </div>
  );}

export default connect(
  (state) => ({
    url: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  })
)(Player);
