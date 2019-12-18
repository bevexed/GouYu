import { lazy } from 'react';
import { RouteType } from './index';

export const HealthPage: RouteType[] = [
  {
    path: '/health',
    component: lazy(() => import('../containers/health-page/health-index')),
    exact: true,
  },
];
