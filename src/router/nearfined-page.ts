import { lazy } from 'react';
import { RouteType } from './index';
export const NearfinedPage: RouteType[] = [
    {
      path: '/nearfined-page',
      component: lazy(() => import('../containers/nearfined-page/nearfined-index/index')),
      exact: true,
    }
  ];
  