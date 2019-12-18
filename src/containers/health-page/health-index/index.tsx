import React, { FC, useState } from 'react';
import './index.less';
import MyPopUp from '../../../components/my-pop-up';
import HealthCoupons from './health-coupons';
import { MyTabBar } from '../../../components/my-tab-bar';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import HealthHeader from './health-header';
import HealthBar from './health-bar';
import HealthEvaluate from './health-evaluate';
import Discounts from '../../shop-page/shop-index/discounts';
import MyWhiteBlank from "../../../components/my-white-blank";
import MyMore from "../../shop-page/components/my-more";
import StarShowBanner from "./star-show-banner";

type HealthIndexProps = {};
const HealthIndex: FC<HealthIndexProps> = (props: HealthIndexProps) => {
  const [HealthCouponsState, setHealthCouponsState] = useState(false);
  return (
    <div className="health-index">
      <WingBlank>
        <HealthHeader/>

        <HealthBar/>
      </WingBlank>

      <HealthEvaluate/>

      <WingBlank>
        <WhiteSpace size={ "lg" }/>
        <Discounts/>
      </WingBlank>

      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

      <MyPopUp
        popUpShow={ HealthCouponsState }
        setPopUpShow={ setHealthCouponsState }>
        <HealthCoupons/>
      </MyPopUp>

      <MyMore path={ '/shop/second-kill-page' } children={ '健康达人SHOW' } rightContent={ '去围观' }/>

      <StarShowBanner bannerList={ [1, 3, 4] }/>
      <MyTabBar/>
    </div>
  );
};

export default HealthIndex;
