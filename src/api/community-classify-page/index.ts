import { ajax } from '../ajax';
import { ClassifyPageDataProps } from '../../redux/community-classify-page/reducer';

export const AjaxGetClassifyPageList = () =>
    ajax<ClassifyPageDataProps>({
        url: '/community/getHotCommunityDynamicPageList',
        method: 'GET',
    });
export const AjaxGetDynamicPageList = () =>
    ajax<any>({
        url: 'community/getUserCommunityDynamicPageList',
        method: 'GET',
    });
export const AjaxGetHeadlinesPageList = () =>
    ajax<any>({
        url: '/community/getCommunityHeadlinesPageList',
        method: 'GET',
    });
