import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sortLogic, deleteSongLogic } from './middlewares';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';

import { root } from './reducers';

const store = createStore(root, applyMiddleware(sortLogic, deleteSongLogic, thunk));

ReactDOM.render(
  <Provider store={store}>
        <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
