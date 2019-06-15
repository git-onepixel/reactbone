/**
 * @file 按业务模块进行分割
 */

import request from '@/utils/request';

/**
 * @type action types
 */
const SET_PKG_NAME = 'pkginfo/set-package-name';
const SET_DOWNLOADS = 'pkginfo/set-downloads';

/**
 * @type state
 */
let defaultState = {
    pkgName: '',
    downloads: []
};

/**
 * @type reducer
 */
export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_PKG_NAME:
            return {
                ...state,
                pkgName: action.pkgName
            };
        case SET_DOWNLOADS:
            return {
                ...state,
                downloads: action.downloads
            };
        default:
            return state;
    }
}

/**
 * @type action
 */
export const actions = {

    /**
     * 设置包名
     * @param {*} pkgName 包名
     */
    setPkgName(pkgName) {
        return {
            type: SET_PKG_NAME,
            pkgName
        }
    },

    /**
     * 根据包名查下载量
     * @param {*} pkgName 包名
     */
    queryDownloadsByName(pkgName) {
        return (dispatch) => {
            let url = `https://api.npmjs.org/downloads/range/2019-05-10:2019-06-10/${pkgName}`;
            request.get(url).then(res => {
                if (res.data) {
                    dispatch({
                        type: SET_DOWNLOADS,
                        downloads: res.data.downloads
                    })
                }
            })
        } 
    }
}