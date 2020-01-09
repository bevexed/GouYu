import React, { FC } from 'react';
import './index.less';
import MyCheckBox from '../../../../../../components/my-check-box';
import OrderShopItem from "../../../../components/order-shop-item";

type Props = {};
const ShopCarItemHeader: FC<Props> = (props: Props) => {
  return (
    <div className="_shop-car-item-header">
      <MyCheckBox
        onChange={ ()=> {
          console.log(1);
        } }
      />
      <div style={ { width: "15Px" } }/>
      <OrderShopItem/>

    </div>
  );
};

export default ShopCarItemHeader;
