import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import MyAddressItem from '../../my-page/components/my-address-item';
import { iconPic } from '../../../config/image';
import MyIcon from '../../../components/my-icon';
import { WingBlank } from 'antd-mobile';

type Props = {};
const FillInOrderPage: FC<Props> = (props: Props) => {
  return (
    <div className="_fill-in-order-page">
      <MyNavBar>填写订单</MyNavBar>
      <WingBlank>
        <MyAddressItem
          border={ false }
          rightContent={ <MyIcon src={ iconPic.more } onTouchEnd={ () => {
          } }/> }
        />
      </WingBlank>
    </div>
  );
};

export default FillInOrderPage;
