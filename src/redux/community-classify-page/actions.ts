import { GIT_CLASSIFY_PAGE_DATA } from '../action-types';
import { ClassifyPageDataProps } from './reducer';
import { Dispatch } from 'redux';
import { AjaxGetClassifyPageList } from '../../api/community-classify-page';

const getClassifyPageData = (ClassifyPageData: ClassifyPageDataProps) => ({
  type: GIT_CLASSIFY_PAGE_DATA,
  data:ClassifyPageData,
});

export const reqClassifyPageData = () => async (dispatch: Dispatch) => {
  const res = await AjaxGetClassifyPageList();
   console.log(2222,res.data)
  dispatch(getClassifyPageData(res.data));
};
