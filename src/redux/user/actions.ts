import { LOGIN_SUCCESS } from '../action-types';
import { AjaxUserLogin } from '../../api/user';
import { AjaxUserLoginProps } from '../../api/user/UserProps';
import { Dispatch } from 'redux';

export const reqUserLogin = (data: AjaxUserLoginProps) => {
  return async (dispatch: Dispatch) => {
    const res = await AjaxUserLogin(data);
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS, data: res });
  };
};
