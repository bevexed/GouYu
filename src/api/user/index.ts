import { ajax } from '../ajax';
import { AjaxUserLoginProps } from "./UserProps";

export const AjaxUserLogin = (data: AjaxUserLoginProps) =>
  ajax({
    url: '/user/userLogin',
    data,
    method: 'POST',
  });
// export const AjaxUserLogin = (data: AjaxUserLoginProps) =>
//   ajax({
//     url: 'https://language.fangti.com/api/login/check_open_id',
//     data,
//     method: 'POST',
//   });
