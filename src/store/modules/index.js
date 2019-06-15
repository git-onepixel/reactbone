/**
 * @file reducer
 */

import { combineReducers } from 'redux';

import * as  pkginfo  from './pkginfo';
import * as product from './product';

// all reducers 
export const reducer = combineReducers({
    pkginfo: pkginfo.default,
    product: product.default
});

// all actions
export const actions = Object.assign({},
    pkginfo.actions,
    product.actions
);
