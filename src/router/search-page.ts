import { lazy } from 'react';
import { RouteType } from './index';

export const SearchPage: RouteType[] = [
  {
    path: '/search-page',
    component: lazy(() => import('../containers/search-page/search-index')),
    exact: true,
  }, {
    path: '/search-result/:search',
    component: lazy(() => import('../containers/search-page/search-result-page')),
    exact: true,
  },
];
