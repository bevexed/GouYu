import { ajax } from '../ajax';
import { ClassifyPageDataProps } from '../../redux/community-classify-page/reducer';
import { AjaxGetDynamicProps,AjaxGetHeadProps } from './CommunityProps'

export const AjaxGetClassifyPageList = () =>
    ajax<ClassifyPageDataProps>({
        url: '/community/getHotCommunityDynamicPageList',
        method: 'GET',
    });
export const AjaxGetDynamicPageList = () =>//动态
    ajax<any>({
        url: '/community/getCommunityDynamicPageList',
        method: 'GET',
    });
export const AjaxGetHeadlinesPageList = () =>//头条
    ajax<any>({
        url: '/community/getCommunityHeadlinesPageList',
        method: 'GET',
    });
export const AjaxGetDynamicDetailsPageList = (data: AjaxGetDynamicProps) =>//动态详情
    ajax<any>({
        url: '/community/getCommunityDynamicInfo',
        method: 'GET',
        data
    });
export const AjaxGetHeadDetailsPageList = (data: AjaxGetHeadProps) =>//头条详情
    ajax<any>({
        url: '/community/getCommunityHeadlinesInfo',
        method: 'GET',
        data
    });

