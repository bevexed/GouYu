import { ajax } from '../ajax';
import { AjaxUserGetCodeProps, AjaxUserLoginProps } from './UserProps';
import { UserInfoProps } from '../../redux/user/reducer';

export const AjaxUserGetCode = (data: AjaxUserGetCodeProps) =>
  ajax({
    url: '/user/getCode',
    data,
    method: 'GET',
  });

export const AjaxUserLogin = (
  data: AjaxUserLoginProps,
): Promise<UserInfoProps> =>
  ajax({
    url: '/user/userLogin',
    data,
    method: 'POST',
  });
