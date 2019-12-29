import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userInfo, UserInfoProps } from './user/reducer';

export interface ReducersProps {
  userInfo: UserInfoProps;
}

const reducers = combineReducers<ReducersProps>({
  userInfo,
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
