import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import MyAddressItem from '../../../my-page/components/my-address-item';
import { iconPic } from '../../../../config/image';
import MyIcon from '../../../../components/my-icon';
import { WingBlank } from 'antd-mobile';
import OrderItem from '../../components/oder-item';
import MyWhiteBlank from '../../../../components/my-white-blank';
import MyList from '../../../../components/my-list';
import MyItem from '../../../../components/my-item';
import MyTitle from '../../../../components/my-title';
import MyCheckBox from '../../../../components/my-check-box';
import FillPayNow from './fill-pay-now';
import { BlackLabel } from '../../../../components/price';

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

        <ul className="inputs">
          <li>
            <BlackLabel>真实姓名</BlackLabel>
            <input
              type="text"
              placeholder={ '因海关需要，请填写收货人真实姓名' }
            />
          </li>
          <li>
            <BlackLabel>身份证号</BlackLabel>
            <input
              type="text"
              placeholder={ '因海关需要，请填写收货人身份证号' }
            />
          </li>
        </ul>
      </WingBlank>

      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

      { new Array(1).fill(1).map((item, key) => (
        <OrderItem key={ key }/>
      )) }

      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

      <MyList>
        <MyItem
          arrow
          right={ <span style={ { color: '#21A3CD' } }>5张可用</span> }
          label={ '优惠券' }
        />
        <MyItem arrow right={ '￥297.00' } label={ '商品合计' }/>
        <MyItem arrow right={ '￥0.00' } label={ '运费' }/>
        <MyItem arrow right={ '￥297.00' } label={ '优惠券' }/>
      </MyList>

      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

      <MyList>
        <MyItem arrow right={ '不开发票' } label={ '发票信息' }/>
      </MyList>

      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

      <MyList renderHeader={ <MyTitle>支付方式</MyTitle> }>
        <MyItem
          right={ <MyCheckBox onChange={ () => {
          } }/> }
          icon={ <MyIcon src={ iconPic.zfb_react }/> }
          label={ '支付宝支付' }
        />
        <MyItem
          right={ <MyCheckBox onChange={ () => {
          } }/> }
          icon={ <MyIcon src={ iconPic.wx_react }/> }
          label={ '微信支付' }
        />
      </MyList>

      <FillPayNow/>
    </div>
  );
};

export default FillInOrderPage;
