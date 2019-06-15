/**
 * @file root page
 */

import './app.less';
import React, { Component } from 'react';
import Tab from '../tab/tab';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root-page-view">
                <Tab />
                <div className="child-page-view">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}