import { ajax } from '../ajax';
import { HomePageDataProps } from '../../redux/home-page/reducer';

export const AjaxGetHomePageList = () =>
  ajax<HomePageDataProps>({
    url: '/goods/getHomePageList',
    method: 'GET',
  });
