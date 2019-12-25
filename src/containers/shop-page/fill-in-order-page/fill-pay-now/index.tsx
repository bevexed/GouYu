/**
 * @Description: 填写订单页面的 底部支付按钮
 * @author 两万
 * @date 2019/12/25
 * @time 15:23
 */

import React, { FC } from 'react';
import './index.less';
import MyWhiteBlank from '../../../../components/my-white-blank';
import { Price } from '../../../../components/price';
import { useHistory } from "react-router";

type Props = {};
const FillPayNow: FC<Props> = (props: Props) => {
  const { push } = useHistory()
  return (
    <>
      <div className="_pay-now">
        <section className="left">
          应付金额： <Price>￥297.00</Price>
        </section>

        <aside className="_pay-now-btn" onTouchEnd={ () => push('/shop/pay-success-page') }>立即支付</aside>
      </div>
      <MyWhiteBlank height={ 112 }/>
    </>
  );
};

export default FillPayNow;
