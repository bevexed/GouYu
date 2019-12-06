import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';
import { MyImage } from "../../components/my-image";
import { LoginPic } from "../../config/image";

interface InputLabel {
  phone: number | string;
  code: number | string;
}

class CompleteInformation extends Component {

  state = {
    phone: '',
    code: '',
  };

  onHandleChange = (
    e: ChangeEvent<HTMLInputElement>,
    name: keyof InputLabel,
  ) => {
    const value = e.target.value;
    this.setState({
      [name]: value,
    } as Pick<InputLabel, typeof name>);
  };

  onSure = () => {

  };

  render() {
    const { phone, code } = this.state;

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

          </label>
        </section>

        <div className="login-btn" onTouchEnd={ this.onSure }>
          登录
        </div>

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

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
)(CompleteInformation);
