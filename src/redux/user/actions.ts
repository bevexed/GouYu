import { GET_USER_INFO } from '../action-types';
import { AjaxUserGetCode, AjaxUserLogin } from '../../api/user';
import { AjaxUserGetCodeProps, AjaxUserLoginProps, } from '../../api/user/UserProps';
import { Dispatch } from 'redux';
import { isPhoneNumber } from '../../util/regex';
import { Toast } from 'antd-mobile';
import { UserInfoProps } from './reducer';


export const getCode = async ({ phone, type }: AjaxUserGetCodeProps) => {
  if (!isPhoneNumber(phone)) {
    Toast.fail('请验证手机号');
    return false;
  }

  const res = await AjaxUserGetCode({ phone, type });
  console.log(res);
  return true;
};

export const getUserInfo = (userInfo: UserInfoProps) => ({
  type: GET_USER_INFO,
});

export const reqUserLogin = (data: AjaxUserLoginProps) => {
  return async (dispatch: Dispatch) => {
    const res = await AjaxUserLogin(data);
    dispatch(getUserInfo(res));
  };
};
