import { lazy } from 'react';
import { RouteType } from './index';

export const ComunityPage: RouteType[] = [
  {
    path: '/comunity-page',
    component: lazy(() => import('../containers/comunity-page/comunity-index')),
    exact: true,
  }
];
