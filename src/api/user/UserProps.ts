export interface AjaxUserLoginProps {
  userMobile: string;
  code: string;
}

export interface AjaxUserGetCodeProps {
  phone: string;
  type: 1 | 2 | 3 | 4; //类型（1、注册/登录；2、忘记密码；3、修改密码; 4、修改手机号
}
