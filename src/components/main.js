import * as React from 'react';
import SearchInput from './SearchBox/index'
import Player from './VideoPlayer'
import Info from './Info'

export default function AssetExample() {
  return (
    <div >
      <SearchInput />
      <Player style={{width:'100vw'}} />
      <Info />
    </div>
  );
}
