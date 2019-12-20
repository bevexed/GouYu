import { lazy } from 'react';
import { RouteType } from './index';

export const HealthPage: RouteType[] = [
  {
    path: '/health',
    component: lazy(() => import('../containers/health-page/health-index')),
    exact: true,
  }, {
    path: '/health/health-evaluate-first-page',
    component: lazy(() => import('../containers/health-page/health-evaluate-all-page/health-evaluate-first-page')),
    exact: true,
  }, {
    path: '/health/health-evaluate-second-page',
    component: lazy(() => import('../containers/health-page/health-evaluate-all-page/health-evaluate-second-page')),
    exact: true,
  },
];
