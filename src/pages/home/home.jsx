/**
 * @file home
 */

import './home.less';
import React, { Component } from 'react';

import ListView from './widgets/list-view/list-view';

// import lazyload from '@/router/lazyload';

// lazyload('about');


export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    setPkgName(e) {
        var value = e.target.value;
        this.props.setPkgName(value);
    }

    query() {
        let pkgName = this.props.pkgName;
        this.props.queryDownloadsByName(pkgName);
    }

    render() {
        return (
            <div className="home-page-view">
                <label>Package：</label>
                <input type="text" 
                    placeholder="package name" 
                    autoFocus={true} 
                    onChange={this.setPkgName.bind(this)} 
                    /> 
                <input type="button" className="btn" onClick={() => this.query()} value="查询" />
                <p className="title">Npm downloads: {this.props.pkgName}</p>
                <ListView/>
            </div>
        )
    }
} 
