import { ajax } from '../ajax';
import { AjaxUserGetCodeProps, AjaxUserLoginProps } from "./UserProps";

export const AjaxUserLogin = (data: AjaxUserLoginProps) =>
  ajax({
    url: '/user/userLogin',
    data,
    method: 'POST',
  });

export const AjaxUserGetCode = (data: AjaxUserGetCodeProps) =>
  ajax({
    url: '/user/getCode',
    data,
    method: 'GET',
  });

