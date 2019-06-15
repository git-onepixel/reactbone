/**
 * @file react router
 */

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/app/app';
import Routes from './routes';

export default class extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Routes />
                </App>
            </Router>
        )
    }
}