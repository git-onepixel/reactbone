/**
 * @file nav
 */


import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default class Tab extends PureComponent {
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
    );
  }
}
