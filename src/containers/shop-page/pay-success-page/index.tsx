import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { BlackLabel, GrayLabel, Price } from '../../../components/price';
import { MyGradientButton, MyNormalButton, } from '../../../components/my-button';
import MyWhiteBlank from '../../../components/my-white-blank';
import { WingBlank } from 'antd-mobile';

type Props = {};
const PaySuccessPage: FC<Props> = (props: Props) => {
  return (
    <div className="_pay-success-page">
      <MyNavBar rightContent={ <GrayLabel>完成</GrayLabel> }>支付成功</MyNavBar>

      <div className="board">
        <MyImage src={ iconPic.btn_success } className="icon-success"/>
        <h1>订单支付成功</h1>

        <div className="pay-type">
          <div className="item">
            <GrayLabel>支付方式</GrayLabel>
            <BlackLabel>微信支付</BlackLabel>
          </div>

          <GrayLabel>|</GrayLabel>

          <div className="item">
            <GrayLabel>支付金额</GrayLabel>
            <Price>¥190.00</Price>
          </div>
        </div>

        <div className="buttons">
          <MyNormalButton>查看订单</MyNormalButton>
          <MyGradientButton className="gradient-button">
            回到首页
          </MyGradientButton>
        </div>
      </div>

      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

      <WingBlank className={ 'bottom' }>
        <GrayLabel>温馨提示：</GrayLabel>
        <MyWhiteBlank/>
        <GrayLabel>
          康养不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作。
        </GrayLabel>
      </WingBlank>
    </div>
  );
};

export default PaySuccessPage;
