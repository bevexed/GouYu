import { CLEAR_USER_INFO, GET_USER_INFO } from '../action-types';
import { AjaxUserGetCode, AjaxUserLogin } from '../../api/user';
import { AjaxUserGetCodeProps, AjaxUserLoginProps, } from '../../api/user/UserProps';
import { Dispatch } from 'redux';
import { isPhoneNumber } from '../../util/regex';
import { Toast } from 'antd-mobile';
import { UserInfoProps } from './reducer';
import { AjaxStatus } from '../../api/ajax';

export const getUserInfo = (userInfo: UserInfoProps) => ({
  type: GET_USER_INFO,
  data: userInfo,
});

export const clearUserInfo = () => ({
  type: CLEAR_USER_INFO,
  data:{token:''}
});

export const getCode = async ({ phone, type }: AjaxUserGetCodeProps) => {
  if (!isPhoneNumber(phone)) {
    Toast.fail('请验证手机号');
    return false;
  }

  const res = await AjaxUserGetCode({ phone, type });
  console.log(res);
  return true;
};

export const reqUserLogin = (data: AjaxUserLoginProps) => {
  return async (dispatch: Dispatch) => {
    const res = await AjaxUserLogin(data);
    const { status } = res;
    if (status === AjaxStatus.success) {
      dispatch(getUserInfo(res.data));
    } else {
      dispatch(clearUserInfo())
    }
  };
};
