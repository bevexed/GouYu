import React, { FC, useState } from 'react';
import { MyImage } from '../../../components/my-image';
import { LoginPic } from '../../../config/image';
import './index.less';
import { Toast } from 'antd-mobile';
import { MyButton } from '../../../components/my-button';
import { Link } from 'react-router-dom';
import MyGetCodeButton from '../../../components/my-button/my-get-code-button';
import { AjaxUserGetCode } from '../../../api/user';
import { isPhoneNumber } from '../../../util/regex';

interface InputLabel {
  phone: number | string;
  code: number | string;
}

const LoginIndex: FC<InputLabel> = props => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const getCode = async () => {
    if (!isPhoneNumber(phone)) {
      Toast.fail('请验证手机号');
      return false
    }

    const res = await AjaxUserGetCode({ phone, type: 1 });
    console.log(res);
    return true;
  };

  const onLogin = () => {
    Toast.show('短信验证码错误');
    setTimeout(() => Toast.success('登录成功'), 1000);
  };

  return (
    <div className="login">
      <header>
        <span>欢迎登录</span>
        <MyImage src={LoginPic.logo} className="logo" />
      </header>

      <section>
        <label htmlFor="phone">
          <input
            id="phone"
            type="tel"
            placeholder={'请输入手机号码'}
            maxLength={11}
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </label>

        <label htmlFor="code">
          <input
            type="tel"
            placeholder={'请输入验证码'}
            maxLength={6}
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <MyGetCodeButton cb={getCode} />
        </label>
      </section>

      <MyButton className={'login'} onTouchEnd={onLogin}>
        登录
      </MyButton>

      <div className="wx-btn">
        <MyImage src={LoginPic.wxBtn} />
      </div>

      <footer>
        <MyImage src={LoginPic.agreeBtn} />
        <span>已阅读并同意</span>
        <Link to={'./user-agreement'}>《用户服务协议》</Link>
      </footer>
    </div>
  );
};

export default LoginIndex;
