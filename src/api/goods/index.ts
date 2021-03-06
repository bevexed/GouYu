import { ajax } from '../ajax';
import { ClassifyBannerProps, OneClassifyListProps, QueryClassifyListProps, } from '../../redux/goods/reducer';
import { AjaxQueryClassifyListProps } from './GoodProps';

export const AjaxQueryOneClassifyList = () =>
  ajax<OneClassifyListProps>({
    url: '/goods/queryOneClassifyList',
    method: 'GET',
  });

export const AjaxQueryClassifyList = (data: AjaxQueryClassifyListProps) =>
  ajax<QueryClassifyListProps>({
    url: '/goods/queryClassifyList',
    method: 'GET',
    data,
  });

export const AjaxQueryClassifyBanner = () =>
  ajax<ClassifyBannerProps>({
    url: '/goods/queryClassifyBanner',
    method: 'GET',
  });
