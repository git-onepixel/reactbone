/**
 * @file entry file
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import Router from '@/router';
import store from '@/store';
import '@/styles/base.less';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app'),
);
