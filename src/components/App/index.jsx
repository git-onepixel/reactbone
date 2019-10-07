/**
 * @file root page
 */


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tab from '@/components/Tab';
import './index.less';

class App extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="root-page-view">
        <Tab />
        <div className="child-page-view">
          { children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
