import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import allReducers from './reducers';
import { randomJokeAPI } from './sagas';

const sageMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sageMiddleware));

sageMiddleware.run(randomJokeAPI);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

