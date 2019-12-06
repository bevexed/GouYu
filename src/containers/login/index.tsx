import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';
import { MyImage } from '../../components/my-image';
import { LoginPic } from '../../config/image';
import './login.less';
import { Toast } from "antd-mobile";

interface InputLabel {
  phone: number | string;
  code: number | string;
}

interface State extends InputLabel {
  codeString: string;
  time: number;
}

class Login extends Component<{}, State> {
  state = {
    phone: '',
    code: '',
    codeString: '获取验证码',
    time: 60,
  };

  onHandleChange = (e: ChangeEvent<HTMLInputElement>, name: keyof InputLabel) => {
    const value = e.target.value;
    this.setState({
      [name]: value,
    } as Pick<InputLabel, typeof name>);
  };

  getCode = () => {
    let { time } = this.state;
    if (time < 60) {
      return Toast.show(time + 's后重发')
    }
    const sendSuccess = () => {
      let timer = setInterval(() => {
        time--;
        if (!time) {
          clearInterval(timer);
        }
        this.setState({
          codeString: time + 's后重发',
          time,
        });
      }, 1000);
    };
    sendSuccess();
    const sendFail = () => {
    };
    sendFail()
  };

  onLogin = () => {
    Toast.show('短信验证码错误')
    setTimeout(() => Toast.success('登录成功'), 1000)
  }

  render() {
    const { phone, code, codeString } = this.state;
    return (
      <div className="login">
        <header>
          <span>欢迎登录</span>
          <MyImage src={ LoginPic.logo } className="logo"/>
        </header>

        <section>
          <label htmlFor="phone">
            <input
              id="phone"
              type="tel"
              placeholder={ '请输入手机号码' }
              maxLength={ 11 }
              value={ phone }
              onChange={ e => this.onHandleChange(e, 'phone') }
            />
          </label>

          <label htmlFor="code">
            <input
              type="tel"
              placeholder={ '请输入验证码' }
              maxLength={ 6 }
              value={ code }
              onChange={ e => this.onHandleChange(e, 'code') }
            />
            <span className="code-btn" onTouchEnd={ this.getCode }>
              { codeString }
            </span>
          </label>
        </section>

        <div className="login-btn" onTouchEnd={ this.onLogin }>登录</div>

        <div className="wx-btn">
          <MyImage src={ LoginPic.wxBtn }/>
        </div>

        <footer>
          <MyImage src={ LoginPic.agreeBtn }/>
          <span>已阅读并同意</span>
          <a href="#login">《用户服务协议》</a>
        </footer>
      </div>
    );
  }
}

export default connect()(Login);
