import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';
import { MyImage } from '../../../components/my-image';
import { iconPic, LoginPic } from '../../../config/image';
import { Picker } from 'antd-mobile';
import { addressList } from '../../../static/location/location';
import arrayTreeFilter from 'array-tree-filter';
import './index.less';
import { MyButton } from '../../../components/my-button';

interface InputLabel {
  city: string;
  code: number | string;
}

class Index extends Component {
  state = {
    code: '',
    pickerValue: [],
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

  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return { city: '杭州市' };
    }
    const treeChildren = arrayTreeFilter(
      addressList,
      (c, level) => c.value === value[level],
    );
    const [province, city] = treeChildren.map(v => v.label);
    return { province, city };
  }

  onSure = () => {
  };

  render() {
    const { code } = this.state;

    return (
      <div className="complete-information">
        <MyImage src={ iconPic.backBlack } className={ 'black-back' }/>

        <header>
          <span>完善信息</span>
          <MyImage src={ LoginPic.logo } className="logo"/>
        </header>

        <section>
          <Picker
            title="选择地区"
            extra="请选择(可选)"
            data={ addressList }
            value={ this.state.pickerValue }
            onChange={ v => this.setState({ pickerValue: v }) }
            onOk={ v => this.setState({ pickerValue: v }) }
            cols={ 2 }>
            <label htmlFor="phone">
              <span>所在城市</span>
              <input
                id="phone"
                type="tel"
                disabled
                placeholder={ this.getSel().city || '杭州市' }
                maxLength={ 11 }
              />
            </label>
          </Picker>

          <label htmlFor="code">
            <span>邀请码</span>
            <input
              type="tel"
              placeholder={ '请输入邀请码（非必填）' }
              maxLength={ 6 }
              value={ code }
              onChange={ e => this.onHandleChange(e, 'code') }
            />
          </label>
        </section>

        <MyButton className={ 'login' } onTouchEnd={ this.onSure }>
          登录
        </MyButton>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
