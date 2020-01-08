import { lazy } from 'react';
import { RouteType } from './index';
export const MayQuestionPage: RouteType[] = [
    {
      path: '/mayquestion-page',
      component: lazy(() => import('../containers/mayquestion-page/mayquestion-index/index')),
      exact: true,
    },{
      path: '/mayquestion-page/mayquestion-details-page',
      component: lazy(() => import('../containers/mayquestion-page/mayquestion-details-page')),
      exact: true,
    },
  ];
  