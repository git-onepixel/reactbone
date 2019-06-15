/**
 * @file lazyload
 */

import Loadable from 'react-loadable';
import Loading from '../components/loading/loading';
import { getMappedComponent } from '../store';
import pages from './pages';

const getPage = (pageName) => {
    let page = null;
    let names = pageName ? pageName.split(/\//) : [];

    while (names.length) {
        let name = names.shift();
        page = page ? page[name] : pages[name];
    }

    if (!page) {
        throw new Error(`The page named: '${pageName}' is not found.`);
    }

    return page;
}

export default (pageName, isMapToProps = true) => {
    let component = Loadable({
        loader: getPage(pageName),
        loading: Loading
    });

    if (isMapToProps) {
        return getMappedComponent(component); 
    } else {
        return component;
    }
}
