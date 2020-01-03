import { lazy } from 'react';
import { RouteType } from './index';
export const RemindPage: RouteType[] = [
    {
      path: '/remind-page',
      component: lazy(() => import('../containers/remind-page/remind-index/index')),
      exact: true,
    }
  ];
  