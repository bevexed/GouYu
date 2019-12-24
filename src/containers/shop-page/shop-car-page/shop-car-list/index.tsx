import React, { FC } from 'react';
import './index.less';
import ShopCarItem from './shop-car-item';

type Props = {};
const ShopCarList: FC<Props> = (props: Props) => {
  return (
    <div className='shop-car-list'>
      <ShopCarItem/>
    </div>
  );
};

export default ShopCarList;
