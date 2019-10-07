/**
 * @file entry file
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from './store';
import 'babel-polyfill';
import '@/styles/base.less';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app'),
);
