import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;