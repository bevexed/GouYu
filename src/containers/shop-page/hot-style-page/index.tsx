import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import Banner from './banner';
import MyMore from '../components/my-more';
import VipGoodList from './vip-good-list';

type Props = {};
const HotStylePage: FC<Props> = (props: Props) => {
  return (
    <div>
      <MyNavBar>爆品专区</MyNavBar>

      <WhiteSpace size={ 'lg' }/>

      <WingBlank>
        <Banner/>
      </WingBlank>

      <WhiteSpace size={ 'sm' }/>

      <MyMore path={ '/' } children={ '网红商品VIP免费领' }/>
      <VipGoodList vipGoodList={ [1, 2, 3, 4, 5] }/>
    </div>
  );
};

export default HotStylePage;
