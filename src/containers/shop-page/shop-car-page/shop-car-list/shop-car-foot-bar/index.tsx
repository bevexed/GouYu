import React, { FC } from 'react';
import './index.less';
import MyCheckBox from '../../../../../components/my-check-box';
import MyWhiteBlank from '../../../../../components/my-white-blank';
import { Price } from "../../../../../components/price";

type Props = {};
const ShopBarFootBar: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="_shop-car-foot-bar">
        <div className="left">
          <MyCheckBox onChange={ () => {
          } }/>
          <span className="label">全选</span>
          <span className="all">商品总价：</span>
          <Price>￥100</Price>
        </div>
        <div className="button">结算</div>
      </div>
      <MyWhiteBlank height={ 112 }/>
    </>
  );
};

export default ShopBarFootBar;
