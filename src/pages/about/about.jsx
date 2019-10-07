/**
 * @file about
 */

import React from 'react';
import BaseComponent from '@/components/BaseComponent';
import './about.less';

class About extends BaseComponent {
  state = {
    title: 'about',
  }

  render() {
    return (
      <div className="about-page-view">
        <div className="title">
          this is about view
        </div>
      </div>
    );
  }
}

export default About;
