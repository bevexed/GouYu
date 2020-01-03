import { lazy } from 'react';
import { RouteType } from './index';
export const QuestionPage: RouteType[] = [
    {
      path: '/question-page',
      component: lazy(() => import('../containers/question-page/question-index/index')),
      exact: true,
    }
  ];
  