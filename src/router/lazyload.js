/**
 * @file lazyload
 */

import Loadable from 'react-loadable';
import Loading from '@/components/Loading';
import pages from './pages';

const getPage = (pageName) => {
  let page = null;
  const names = pageName ? pageName.split(/\//) : [];

  while (names.length) {
    const name = names.shift();
    page = page ? page[name] : pages[name];
  }

  if (!page) {
    throw new Error(`The page named: '${pageName}' is not found.`);
  }

  return page;
};

export default (pageName) => {
  const component = Loadable({
    loader: getPage(pageName),
    loading: Loading,
  });

  return component;
};
