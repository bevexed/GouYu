import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import ShopCarList from './shop-car-list';
import MyWhiteBlank from "../../../components/my-white-blank";
import ShopBarFootBar from "./shop-car-list/shop-car-foot-bar";

type Props = {};
const ShopCarPage: FC<Props> = (props: Props) => {
  return (
    <div className="shop-car-page">
      <MyNavBar
        rightContent={ <span className="shop-car-page-editor-btn">编辑</span> }>
        购物车
      </MyNavBar>

      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>
      <ShopCarList/>
      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>
      <ShopCarList/>
      <ShopBarFootBar/>
    </div>
  );
};

export default ShopCarPage;
