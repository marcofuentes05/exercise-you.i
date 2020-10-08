import React from 'react'
import { connect } from 'react-redux';
import * as selectors from '../../Utils/reducers'
import * as videosActions from '../../Utils/actions/videos';

const Data = ( { data } ) => (
  <div>
    <h1>
      Title: { data ? data.title : 'None' /* VIDEO TITLE IF NOT BLOCKED BY CORS */ }
    </h1>
    <h2>
      Description: { data ? data.description : 'None' /* VIDEO DESCRIPTION IF NOT BLOCKED BY CORS */ }
    </h2>
    <h3>
      Channel: { data ? data.channel : 'None' /* VIDEO CHANNEL IF NO BLOCKED BY CORS */ }
    </h3>

  </div>
)

export default connect(
  state => ({
    data: selectors.getVideos(state)[0]
  }),
  dispatch => ({

  })
)(Data)
