import React, { Component } from 'react';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { iconPic } from '../../../config/image';
import './index.less';
import Banner from './banner';
import Sort from './sort'
import Discounts from './discounts';


type Props = {};
type State = {};

export default class ShopIndex extends Component<Props, State> {
  render() {
    return (
      <div className="shop-index">
        <WingBlank>
          <div className="search">
            <img src={ iconPic.search } alt=""/>
            <input type="text" placeholder={ '居家必备瑜伽垫' }/>
          </div>

          <Banner/>

          <WhiteSpace size={ 'lg' }/>

          <Sort/>

          <WhiteSpace size={ 'md' }/>


          <Discounts/>
        </WingBlank>
      </div>
    );
  }
}
