import { GET_HOME_PAGE_DATA } from '../action-types';
import { HomePageDataProps } from './reducer';
import { Dispatch } from 'redux';
import { AjaxGetHomePageList } from '../../api/home-page';

const getHomePageData = (HomePageData: HomePageDataProps) => ({
  type: GET_HOME_PAGE_DATA,
  data: HomePageData,
});

export const reqHomePageData = () => async (dispatch: Dispatch) => {
  const res = await AjaxGetHomePageList();
  dispatch(getHomePageData(res.data));
};
