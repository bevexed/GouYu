/**
 * @Description: 订单单项（商店头 + 商品列表）
 * @author 两万
 * @date 2019/12/25
 * @time 14:06
 */

import React, { FC } from 'react';
import './index.less';
import OrderGoodItem from '../order-good-item';
import OrderShopItem from '../order-shop-item';
import { WingBlank } from 'antd-mobile';

type Props = {};
const OrderItem: FC<Props> = (props: Props) => {
  return (
    <WingBlank className="_order-item">
      <OrderShopItem/>
      { new Array(3).fill(1).map((item, key) => (
        <OrderGoodItem showBorderBottom={ key < 2 } key={ key }/>
      )) }
    </WingBlank>
  );
};

export default OrderItem;
