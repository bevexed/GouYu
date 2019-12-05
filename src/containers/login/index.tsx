import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MyImage } from "../../components/my-image";
import { LoginPic } from "../../config/image";
import './login.less'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <header>
          <span>
            欢迎登录
          </span>
          <MyImage
            src={ LoginPic.logo }
            className='logo'
          />
        </header>

        <section>

          <label htmlFor="phone">
            <input type="number" placeholder={ '请输入手机号码' } maxLength={ 11 }/>
          </label>

          <label htmlFor="code">
            <input type="number" placeholder={ '请输入验证码' } maxLength={ 6 }/>

            <span className='code-btn'>
              获取验证码
            </span>
          </label>

        </section>

      </div>
    );
  }
}


export default connect(
)(Login);
