import * as React from 'react';
import { Provider } from 'react-redux'
import Main from './components/main';
import { configureState } from './store'
const { store, createStore } = configureState()
export default function App() {
  return (
    <Provider store={store}>
      <div >
        <div>
          <Main />
        </div>
      </div>
    </Provider>
  );
}

