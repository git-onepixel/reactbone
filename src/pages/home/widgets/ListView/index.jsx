/**
 * @file downloads
 */


import React from 'react';
import BaseComponent from '@/components/BaseComponent';

import './index.less';

class ListView extends BaseComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { downloads } = this.props;
    return (
      <ul className="download-list">
        <li className="item">
          <span>date</span>
          <span>downloads</span>
        </li>
        {
            downloads.map((pkg, index) => (
              <li key={index} className="item">
                <span>{pkg.day}</span>
                <span>{pkg.downloads}</span>
              </li>
            ))
        }
      </ul>
    );
  }
}

export default ListView.connect();
