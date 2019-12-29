import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userInfo, UserInfoProps } from './user/reducer';
import {
  classifyBanner,
  ClassifyBannerProps,
  oneClassifyList,
  OneClassifyListProps,
  queryClassifyList,
  QueryClassifyListProps,
} from './goods/reducer';

export interface ActionProps {
  type: string;
  data: any;
}

export interface ReducersProps {
  userInfo: UserInfoProps;
  oneClassifyList: OneClassifyListProps;
  queryClassifyList: QueryClassifyListProps;
  classifyBanner: ClassifyBannerProps;
}

const reducers = combineReducers<ReducersProps, ActionProps>({
  userInfo,

  oneClassifyList,
  queryClassifyList,
  classifyBanner,
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
