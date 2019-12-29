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
import { homePageData, HomePageDataProps } from './home-page/reducer';

export interface ActionProps {
  type: string;
  data: any;
}

export interface ReducersProps {
  userInfo: UserInfoProps;

  homePageData: HomePageDataProps;

  oneClassifyList: OneClassifyListProps;
  queryClassifyList: QueryClassifyListProps;
  classifyBanner: ClassifyBannerProps;
}

const reducers = combineReducers<ReducersProps, ActionProps>({
  userInfo,

  homePageData,

  oneClassifyList,
  queryClassifyList,
  classifyBanner,
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
