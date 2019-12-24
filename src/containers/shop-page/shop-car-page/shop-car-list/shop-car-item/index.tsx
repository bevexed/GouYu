import React, { FC } from 'react';
import './index.less'
import ShopCarItemHeader from "./shop-car-item-header";
import ShopCarItemList from "./shop-car-item-list";
import { WhiteSpace } from "antd-mobile";

type Props = {};
const ShopCarItem: FC<Props> = (props: Props) => {
  return (
    <div className={ 'shop-car-item' }>
      <ShopCarItemHeader/>
      <WhiteSpace size={ "xl" }/>
      <ShopCarItemList/>
    </div>
  );
};

export default ShopCarItem
