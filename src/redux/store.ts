import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { user } from './user/reducer';

const reducers = combineReducers({
  user
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
