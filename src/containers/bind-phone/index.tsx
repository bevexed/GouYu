import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';
import { MyNavBar } from '../../components/my-nav-bar';
import { Toast, WingBlank } from 'antd-mobile';
import './index.less';
import { MyButton } from '../../components/my-button';

interface InputLabel {
  phone: number | string;
  code: number | string;
}

interface State extends InputLabel {
  codeString: string;
  time: number;
}

class BindPhone extends Component {
  state = {
    phone: '',
    code: '',
    codeString: '获取验证码',
    time: 60,
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

  getCode = () => {
    let { time } = this.state;
    if (time < 60) {
      return Toast.show(time + 's后重发');
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
    sendFail();
  };

  onRegisterCode = () => {
  };

  render() {
    const { phone, code, codeString } = this.state;

    return (
      <div className="bind-phone">
        <MyNavBar title={ '123' }>绑定手机号</MyNavBar>

        <WingBlank>
          <section>
            <div className="little-title">完成绑定可获得200金币哦~</div>

            <div className="input-item">
              <label htmlFor="code">
                <span>+86</span>
                <input
                  type="tel"
                  placeholder={ '请输入手机号码' }
                  maxLength={ 6 }
                  value={ code }
                  onChange={ e => this.onHandleChange(e, 'code') }
                />
                <span className="code-btn" onTouchEnd={ this.getCode }>
                  { codeString }
                </span>
              </label>
              <label htmlFor="code">
                <span>验证码</span>
                <input
                  type="tel"
                  placeholder={ '请输入短信验证码' }
                  maxLength={ 6 }
                  value={ code }
                  onChange={ e => this.onHandleChange(e, 'code') }
                />
              </label>
            </div>
          </section>

          <MyButton onTouchEnd={ this.onRegisterCode }>创建账号</MyButton>
        </WingBlank>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

export default connect(mapStateToProps)(BindPhone);
