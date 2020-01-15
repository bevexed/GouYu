/**
 * @Description: 商店头
 * @author 两万
 * @date 2019/12/25
 * @time 14:11
 */

import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../../components/my-image';
import { iconPic } from '../../../../config/image';

type Props = {
  storeName:string
  id:string
};
const OrderShopItem: FC<Props> = (props: Props) => {
  return (
    <div className="_order-shop-item">
      {/*<MyImage*/}
      {/*  className="shop-img"*/}
      {/*  src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/383301414/O1CN01fjl5Go1MJecL2pDEe_!!0-item_pic.jpg_250x250.jpg_.webp"*/}
      {/*/>*/}
      <div className="shop-name">{props.storeName}</div>
      <MyImage src={ iconPic.more } onTouchEnd={ () => {
      } } className="more"/>
    </div>
  );
};

export default OrderShopItem;
