/**
 * @file home
 */


import React from 'react';
import ListView from './widgets/ListView';
import BaseComponent from '@/components/BaseComponent';
import './home.less';

class Home extends BaseComponent {
  setPkgName(e) {
    const { setPkgName } = this.props;
    setPkgName(e.target.value);
  }

  query() {
    const { pkgName, queryDownloadsByName } = this.props;
    queryDownloadsByName(pkgName);
  }

  render() {
    const { pkgName } = this.props;
    return (
      <div className="home-page-view">
        <span>Npm: </span>
        <input
          type="text"
          placeholder="package name"
          autoFocus
          onChange={this.setPkgName.bind(this)}
        />
        <input
          type="button"
          className="btn"
          onClick={() => this.query()}
          value="查询"
        />
        <p className="title">
          {pkgName}
        </p>
        <ListView />
      </div>
    );
  }
}

export default Home.connect();
