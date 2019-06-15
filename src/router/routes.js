/**
 * @file routes
 */

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../components/not-found/not-found';
import lazyload from './lazyload';

export default class extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact path='/' to='/home' />
                <Route exact path='/home' component={lazyload('home')} />
                <Route exact path='/about' component={lazyload('about')} />
                <Route exact path='/login' component={lazyload('user/login')} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

 