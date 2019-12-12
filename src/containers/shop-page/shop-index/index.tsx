import React, { Component } from 'react';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { iconPic } from '../../../config/image';
import './index.less';
import Banner from './banner';
import Sort from './sort';
import Discounts from './discounts';
import MyWhiteBlank from '../../../components/my-white-blank';
import { MyTabBar } from '../../../components/my-tab-bar';
import Seckill from './seckill';
import { GoodList } from './good-list';
import VipGoodList from './vip-good-list';
import GuessYouLikeList from './guess-you-like';
import FloatButton from "./float-button";

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

        <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

        <Seckill/>

        <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

        <GoodList
          goodList={ [
            {
              img:
                'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/668693/O1CN01wDbsyy2E5RYoR2ULs_!!668693.jpg_180x180.jpg_.webp',
              title:
                '护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配',
            },
            {
              img:
                'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/668693/O1CN01wDbsyy2E5RYoR2ULs_!!668693.jpg_180x180.jpg_.webp',
              title:
                '护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配',
            },
          ] }
        />

        <VipGoodList vipGoodList={ [1, 2] }/>

        <GuessYouLikeList guessYouLikeList={ [1, 2, 3, 4] }/>

        <FloatButton/>

        <MyTabBar/>

        <MyWhiteBlank height={ 100 }/>
      </div>
    );
  }
}
