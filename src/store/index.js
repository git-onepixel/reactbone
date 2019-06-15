import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer, actions } from './modules';

const store = createStore(reducer, applyMiddleware(thunk));

const mapStateToProps = (state) => {
    let props = {};
    Object.keys(state).forEach(ns => Object.assign(props, state[ns]));
    return { 
        ...props
    }
}

const mapDispatchToProps = (dispatch) => {
    let props = bindActionCreators(actions, dispatch);
    return {
        ...props
    }
}

export function getMappedComponent(component) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export default store;


