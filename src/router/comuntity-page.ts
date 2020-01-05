import { lazy } from 'react';
import { RouteType } from './index';

export const ComunityPage: RouteType[] = [
  {
    path: '/comunity-page',
    component: lazy(() => import('../containers/comunity-page/comunity-index')),
    exact: true,
  }, {
    path: '/comunity/dynamic-details-page',
    component: lazy(() => import('../containers/comunity-page/dynamic-details-page')),
    exact: true,
  }, {
    path: '/comunity/comments-details-page',
    component: lazy(() => import('../containers/comunity-page/dynamic-details-page/comments-details-page')),
    exact: true,
  },
];
