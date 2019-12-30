import React, { FC, useState } from 'react';
import { MyImage } from '../../../components/my-image';
import { LoginPic } from '../../../config/image';
import './index.less';
import { MyButton } from '../../../components/my-button';
import { Link, Redirect } from 'react-router-dom';
import MyGetCodeButton from '../../../components/my-button/my-get-code-button';
import { getCode, reqUserLogin } from '../../../redux/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ReducersProps } from "../../../redux/store";
import { UserInfoProps } from "../../../redux/user/reducer";

interface LoginIndexProps {}

const LoginIndex: FC<LoginIndexProps> = () => {
  const dispatch = useDispatch();
  const {token} =  useSelector<ReducersProps,UserInfoProps>((state) => state.userInfo)
  const [phone, setPhone] = useState('18640460506');
  const [code, setCode] = useState('88888');

  return (
    token?<Redirect to={'/health-page'}/>:
    <div className="login">
      <header>
        <span>欢迎登录</span>
        <MyImage src={LoginPic.logo} className="logo" />
      </header>

      <section>
        <label htmlFor="phone">
          <input
            id="phone"
            type="phone"
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
          <MyGetCodeButton cb={() => getCode({ phone, type: 1 })} />
        </label>
      </section>
      <MyButton
        className={'login'}
        onTouchEnd={() => dispatch(reqUserLogin({ userMobile: phone, code }))}
      >
        登录
      </MyButton>

      <div className="wx-btn">
        <MyImage src={LoginPic.wxBtn} />
      </div>

      <footer>
        <MyImage src={LoginPic.agreeBtn} />
        <span>已阅读并同意</span>
        <Link to={'/login/user-agreement-page'}>《用户服务协议》</Link>
      </footer>
    </div>
  );
};

export default LoginIndex;
