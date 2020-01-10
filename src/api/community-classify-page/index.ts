import { ajax } from '../ajax';
import { ClassifyPageDataProps } from '../../redux/community-classify-page/reducer';
import {
    AjaxGetDynamicProps, AjaxGetHeadProps,
    AjaxGetAwersProps, AjaxGetQuestionsProps,
    AjaxGetHeadlinesCommentProps,
    AjaxGetImageProps,
    AjaxGetIAnswerDetailsProps,
    AjaxGetDynamicCommentProps,
    AjaxGetDynamicCommentDetailsProps,
    AjaxGetHeadlinesCommentDetailsProps,
    AjaxGetMyCommunityProps,
    AjaxGetCommunityAnswerProps
} from './CommunityProps'

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
export const AjaxGetDynamicCommentPageList = (data: AjaxGetDynamicCommentProps) =>//动态评论回复列表
    ajax<any>({
        url: '/community/getCommunityCommentList',
        method: 'GET',
        data
    });
export const AjaxGetDynamicCommentDetailsPageList = (data: AjaxGetDynamicCommentDetailsProps) =>//动态评论详情列表
    ajax<any>({
        url: '/community/getCommunityCommentInfo',
        method: 'GET',
        data
    });
export const AjaxGetHeadDetailsPageList = (data: AjaxGetHeadProps) =>//头条详情
    ajax<any>({
        url: '/community/getCommunityHeadlinesInfo',
        method: 'GET',
        data
    });
export const AjaxGetHeadlinesCommentPageList = (data: AjaxGetHeadlinesCommentProps) =>//头条评论回复列表
    ajax<any>({
        url: '/community/getHeadlinesCommentPageList',
        method: 'GET',
        data
    });
export const AjaxGetHeadlinesCommentDetailsPageList = (data: AjaxGetHeadlinesCommentDetailsProps) =>//头条评论详情列表
    ajax<any>({
        url: '/community/getHeadlinesCommentInfo',
        method: 'GET',
        data
    });
export const AjaxGetAnswerPageList = () =>//回答
    ajax<any>({
        url: '/community/getCommunityQuestionsPageList',
        method: 'GET',
    });
export const AjaxGetQuestionsPage = (data: AjaxGetQuestionsProps) =>//回答/提问
    ajax<any>({
        url: '/community/addCommunityQuestions',
        method: 'POST',
        data
    });
export const AjaxGetMyCommunityPageList = (data: AjaxGetMyCommunityProps) =>//我的回答/提问列表
    ajax<any>({
        url: '/community/getMyCommunityQuestions',
        method: 'GET',
        data
    });
export const AjaxGetCommunityAnswerPageList = (data: AjaxGetCommunityAnswerProps) =>//我的回答/回答列表
    ajax<any>({
        url: '/community/getMyCommunityAnswer',
        method: 'GET',
        data
    });

export const AjaxGetImagePage = (data: AjaxGetImageProps) =>//提问图片上传
    ajax<any>({
        url: '/oss/uploadMany',
        method: 'POST',
        data
    });
export const AjaxGetAnswerDetailsPage = (data: AjaxGetIAnswerDetailsProps) =>//回答详情
    ajax<any>({
        url: '/community/getQuestionsAnswerInfo',
        method: 'GET',
        data
    })


