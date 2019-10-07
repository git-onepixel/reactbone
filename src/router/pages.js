/**
 * @file pages
 */

export default {
  home: () => import(/* webpackChunkName: "home" */ '../pages/home/home'),
  about: () => import(/* webpackChunkName: "about" */ '../pages/about/about'),
};
