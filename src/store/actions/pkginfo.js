import request from '@/utils/request';

/**
 * @type action types
 */
export const SET_PKG_NAME = 'pkginfo/set-package-name';
export const SET_DOWNLOADS = 'pkginfo/set-downloads';

export default {
  /**
   * 设置包名
   * @param {*} pkgName 包名
   */
  setPkgName(pkgName) {
    return {
      type: SET_PKG_NAME,
      pkgName,
    };
  },

  /**
   * 根据包名查下载量
   * @param {*} pkgName 包名
   */
  queryDownloadsByName(pkgName) {
    return (dispatch) => {
      const url = `https://api.npmjs.org/downloads/range/2019-09-10:2019-10-10/${pkgName}`;
      request.get(url).then((res) => {
        if (res.data) {
          dispatch({
            type: SET_DOWNLOADS,
            downloads: res.data.downloads,
          });
        }
      });
    };
  },
};
