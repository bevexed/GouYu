import React, { FC } from 'react';
import './index.less'
import ShopCarPIc from './image/btn_cart_h@2x.png'
import ShopMallPIc from './image/btn_mall_h@2x.png'

type Props = {};
const FloatButton: FC<Props> = (props: Props) => {
  return (
    <div className='float-button'>
      <img src={ ShopCarPIc } alt=""/>
      <img src={ ShopMallPIc } alt=""/>
    </div>
  );
};

export default FloatButton
