import React , {useState} from 'react'
import {connect } from 'react-redux'
import * as selectors from '../../Utils/reducers/index'
import * as videosActions from '../../Utils/actions/videos'
import youtube from '../../Utils/youtube'

const handleSubmit = async (name) => {
  try{
    const response = await youtube.get('/search/' , {
    mode : "no-cors", 
    params: {
      q: name
    }
  })
  const json = await response.json();
  console.log("JSON: ",json)
  }catch(err){
    console.log("ERROR", err)
  }
}

const SearchInput = ({videos , search}) => {
  const [name, setName] = useState('')

  return(
  <div>
    <input
      type="text"
      value={name}
      onChange={val => setName(val.target.value)}
    >
    </input>
    <button
      onClick={() => {
        search(name)}
        }
    >
      Buscar
    </button>
    <h1>
      {
        videos[0] ? videos[0] : 'No loaded videos'
      }
    </h1>
  </div>
)}

export default connect(
  (state) => ({
    videos : selectors.getVideos(state),
  }),
  dispatch=> ({
    search(name){
      console.log('En search')
      handleSubmit(dispatch , name)
    }
  })
)(SearchInput)