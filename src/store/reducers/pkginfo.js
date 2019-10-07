import { SET_PKG_NAME, SET_DOWNLOADS } from '../actions/pkginfo';

const defaultState = {
  pkgName: '',
  downloads: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_PKG_NAME:
      return {
        ...state,
        pkgName: action.pkgName,
      };
    case SET_DOWNLOADS:
      return {
        ...state,
        downloads: action.downloads,
      };
    default:
      return state;
  }
};
