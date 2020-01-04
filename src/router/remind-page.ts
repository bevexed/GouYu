import { lazy } from 'react';
import { RouteType } from './index';
export const RemindPage: RouteType[] = [
    {
      path: '/remind-page',
      component: lazy(() => import('../containers/remind-page/remind-index/index')),
      exact: true,
    }, {
      path: '/remind/platform-page',
      component: lazy(() => import('../containers/remind-page/platform-page')),
      exact: true,
    }, {
      path: '/remind/logistics-page',
      component: lazy(() => import('../containers/remind-page/logistics-page')),
      exact: true,
    },{
      path: '/remind/message-page',
      component: lazy(() => import('../containers/remind-page/message-page')),
      exact: true,
    },

  ];
  