/**
 * @file react router
 */

import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import App from '@/components/App';
import NotFound from '@/components/NotFound';
import lazyload from './lazyload';

export default function () {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route exact path="/home" component={lazyload('home')} />
          <Route exact path="/about" component={lazyload('about')} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}
