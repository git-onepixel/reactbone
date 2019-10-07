import { combineReducers } from 'redux';

import pkginfo from './pkginfo';
import product from './product';

export default combineReducers({
  pkginfo,
  product,
});
