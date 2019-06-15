/**
 * @file nav
 */

import './tab.less'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Tab extends Component {
    constructor(props) {
        super(props);
    }

    navSwitch(pageName) {
        this.props.history.push(pageName)
    }

    render() {
        return (
            <div className="nav-page-view">
                <ul className="nav-list">
                    <li className="nav">
                      <Link to="/home">主页</Link>
                    </li>
                    <li className="nav">
                       <Link to="/about">关于</Link>
                    </li>
                </ul> 
            </div>
        )
    }
}