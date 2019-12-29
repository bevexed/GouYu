import { Dispatch } from 'redux';
import { ClassifyBannerProps, OneClassifyListProps, QueryClassifyListProps } from './reducer';
import { GET_CLASSIFY_BANNER, GET_CLASSIFY_LIST, GET_ONE_CLASSIFY_LIST } from '../action-types';
import { AjaxQueryClassifyBanner, AjaxQueryClassifyList, AjaxQueryOneClassifyList, } from '../../api/goods';
import { AjaxQueryClassifyListProps } from '../../api/goods/GoodProps';

const getQueryOneClassifyList = (OneClassifyList: OneClassifyListProps) => ({
  type: GET_ONE_CLASSIFY_LIST,
  data: OneClassifyList,
});

const getQueryClassifyList = (ClassifyList: QueryClassifyListProps) => ({
  type: GET_CLASSIFY_LIST,
  data: ClassifyList,
});

const getQueryClassifyBanner = (ClassifyBanner: ClassifyBannerProps) => ({
  type: GET_CLASSIFY_BANNER,
  data: ClassifyBanner,
});


export const reqQueryOneClassifyList = () => {
  return async (dispatch: Dispatch) => {
    const res = await AjaxQueryOneClassifyList();
    dispatch(getQueryOneClassifyList(res.data));
  };
};

export const reqQueryClassifyList = (
  classifyId: AjaxQueryClassifyListProps,
) => {
  return async (dispatch: Dispatch) => {
    const res = await AjaxQueryClassifyList(classifyId);
    dispatch(getQueryClassifyList(res.data));
  };
};

export const reqQueryClassifyBanner = ()=>{
  return async (dispatch:Dispatch)=>{
    const res = await AjaxQueryClassifyBanner()
    dispatch(getQueryClassifyBanner(res.data))
  }
}
