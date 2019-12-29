import { ActionProps } from '../store';
import { GET_CLASSIFY_LIST, GET_ONE_CLASSIFY_LIST } from '../action-types';

const initOneClassifyList = [
  {
    id: 0,
    isDisplay: 1, // '是否显示(0:否 1:是)',
    modifyTime: '修改时间',
    oneName: '一级分类名称',
    sort: '排序',
  },
];

export type OneClassifyListProps = typeof initOneClassifyList;

export const oneClassifyList = (
  state = initOneClassifyList,
  action: ActionProps,
) => {
  switch (action.type) {
    case GET_ONE_CLASSIFY_LIST:
      return [...action.data];
    default:
      return state;
  }
};

const ThreeClassify = [
  {
    isRecommend: '是否推荐(0:否 1:是)',
    goodsTwoClassifyId: '二级分类id',
    name: '三级分类名称',
    id: '三级分类id',
    sort: '排序',
    isDisplay: '是否显示(0:否 1:是)',
    isHot: '是否热门(0:否 1:是)',
    twoName: '',
  },
];

const QueryClassifyList = [
  {
    twoName: '二级分类名称',
    goodsOneClassifyId: '一级分类id',
    ThreeClassify,
    id: '二级分类id',
    sort: '排序',
    isDisplay: '是否显示',
  },
];

export type QueryClassifyListProps = typeof QueryClassifyList;

export type ThreeClassifyProps = typeof ThreeClassify;

export const queryClassifyList = (
  state = QueryClassifyList,
  action: ActionProps,
) => {
  switch (action.type) {
    case GET_CLASSIFY_LIST:
      return action.data;
    default:
      return state;
  }
};
