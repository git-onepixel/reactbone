/**
 * @file downloads
 */

import './list-view.less';

import React, { Component } from 'react';
import { getMappedComponent } from '@/store';

class ListView extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let downloads = this.props.downloads;
        return (
            <ul className="download-list">
                <li  className="item">
                    <span>date</span>
                    <span>downloads</span>
                </li>
                {
                    downloads.map((pkg, index) => {
                        return (
                            <li key={index} className="item">
                                <span>{pkg.day}</span>
                                <span>{pkg.downloads}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default getMappedComponent(ListView);