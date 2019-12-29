import { CLEAR_USER_INFO, GET_USER_INFO } from '../action-types';
import { getLocalStorage, saveLocalStorage } from '../../util/storage';
import { ActionProps } from '../store';

const initUserInfo = {
  isFirst: '是否第一次登录(0:否 1:是)',
  user: {
    bindWx: '是否绑定微信',
    gold: '金币',
    grade: '等级(0:普通会员 1:vip会员 2:金牌会员 3:城市合伙人)',
    headImage: '头像',
    id: '用户id',
    nickName: '用户昵称',
    sex: '性别',
    status: '状态',
    userMobile: '用户手机号',
    walletBalance: '钱包余额',
  },
  token: '',
};

export type UserInfoProps = typeof initUserInfo;
export const userInfo = (state = initUserInfo, action: ActionProps) => {
  switch (action.type) {
    case GET_USER_INFO:
      saveLocalStorage('userInfo', action.data);
      saveLocalStorage('token', action.data.token);
      return { ...state, ...action.data };
    case CLEAR_USER_INFO:
      localStorage.clear();
      return { ...state, ...action.data };
    default:
      const token = getLocalStorage('token');
      return { ...state, token };
  }
};
