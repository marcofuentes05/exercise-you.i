import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducer from './Utils/reducers';
import mainSaga from './Utils/sagas/index';

export const configureState = () => {
  const sagaMiddleware = createSagaMiddleware();
  let composeEnhancers = compose;

  const store = createStore(
    reducer, 
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(mainSaga);
  return { store, createStore };
};
