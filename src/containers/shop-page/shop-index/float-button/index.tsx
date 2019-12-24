import React, { FC } from 'react';
import './index.less';
import ShopCarPIc from './image/btn_cart_h@2x.png';
import ShopMallPIc from './image/btn_mall_h@2x.png';
import { useHistory } from 'react-router';

type Props = {};
const FloatButton: FC<Props> = (props: Props) => {
  const { push } = useHistory();
  return (
    <div className="float-button">
      <img
        src={ ShopCarPIc }
        alt=""
        onTouchEnd={ () => push('/shop/shop-car-page') }
      />
      <img src={ ShopMallPIc } alt=""/>
    </div>
  );
};

export default FloatButton;
