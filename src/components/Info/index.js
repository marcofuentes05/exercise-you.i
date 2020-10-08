import React from 'react'
import { connect } from 'react-redux';
import * as selectors from '../../Utils/reducers'
import * as videosActions from '../../Utils/actions/videos';

const Data = ( { data } ) => (
  <div>
    <h1>
      {data.title /* VIDEO TITLE IF NOT BLOCKED BY CORS */ }
    </h1>
    <h1>
      {data.description /* VIDEO DESCRIPTION IF NOT BLOCKED BY CORS */ }
    </h1>
    <h1>
      {data.channel /* VIDEO CHANNEL IF NO BLOCKED BY CORS */ }
    </h1>

  </div>
)

export default connect(
  state => ({
    data: selectors.getVideos(state)[0]
  }),
  dispatch => ({

  })
)(Data)
