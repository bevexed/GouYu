import { Dispatch } from 'redux';
import { OneClassifyListProps, QueryClassifyListProps } from './reducer';
import { GET_CLASSIFY_LIST, GET_ONE_CLASSIFY_LIST } from '../action-types';
import { AjaxQueryClassifyList, AjaxQueryOneClassifyList, } from '../../api/goods';
import { AjaxQueryClassifyListProps } from '../../api/goods/GoodProps';

const getQueryOneClassifyList = (OneClassifyList: OneClassifyListProps) => ({
  type: GET_ONE_CLASSIFY_LIST,
  data: OneClassifyList,
});

const getQueryClassifyList = (ClassifyList: QueryClassifyListProps) => ({
  type: GET_CLASSIFY_LIST,
  data: ClassifyList,
});

export const reqQueryOneClassifyList = () => {
  return async (dispatch: Dispatch) => {
    let res = await AjaxQueryOneClassifyList();
    dispatch(getQueryOneClassifyList(res.data));
  };
};

export const reqQueryClassifyList = (
  classifyId: AjaxQueryClassifyListProps,
) => {
  return async (dispatch: Dispatch) => {
    let res = await AjaxQueryClassifyList(classifyId);
    dispatch(getQueryClassifyList(res.data));
  };
};
