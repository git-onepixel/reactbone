/**
 * @file React Base Component
 */

import { is } from 'immutable';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '@/store/actions';

class BaseComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    nextProps = nextProps || {};
    nextState = nextState || {};

    const thisProps = this.props || {};
    const thisState = this.state || {};

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length
      || Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }

    for (const key in nextProps) {
      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
        return true;
      }
    }

    for (const key in nextState) {
      if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
        return true;
      }
    }
    return false;
  }

  static connect() {
    const mapStateToProps = (state) => {
      const props = {};
      Object.keys(state).forEach((ns) => Object.assign(props, state[ns]));
      return {
        ...props,
      };
    };

    const mapDispatchToProps = (dispatch) => {
      const props = bindActionCreators(actions, dispatch);
      return {
        ...props,
      };
    };

    return connect(mapStateToProps, mapDispatchToProps)(this);
  }
}

export default BaseComponent;
