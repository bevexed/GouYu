import { ajax } from '../ajax';
import { ClassifyPageDataProps } from '../../redux/community-classify-page/reducer';

export const AjaxGetClassifyPageList = () =>
  ajax<ClassifyPageDataProps>({
    url: '/community/getHotCommunityDynamicPageList',
    method: 'GET',
  });
