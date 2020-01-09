/**
 * @Description: 填写订单页面的 底部支付按钮
 * @author 两万
 * @date 2019/12/25
 * @time 15:23
 */

import React, { FC } from "react";
import "./index.less";
import MyWhiteBlank from "../../../../../components/my-white-blank";
import { Price } from "../../../../../components/price";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { ReducersProps } from "../../../../../redux/store";
import { BuyNowProps } from "../../../../../redux/buy-now/reducer";
import { AjaxOrderSubmissionOrdinaryGoods } from "../../../../../api/order";
import { Toast } from "antd-mobile";

type Props = {};
const FillPayNow: FC<Props> = (props: Props) => {
  const {
    couponId,receiverAddressId,goodsId,buyQuantity,skuId,name,idCard
  } = useSelector<ReducersProps, BuyNowProps>(state => state.buyNow);
  const data = { couponId,receiverAddressId,goodsId,buyQuantity,skuId,name,idCard}
  const UP = () => {
    Object.entries(data).forEach(([key,value])=>{
      if (!value){
        // @ts-ignore
        delete data[key]
      }
    })
    AjaxOrderSubmissionOrdinaryGoods({
      ...data
    }).then(res => {
      console.log(res);
      if (res.status === 0) {
        replace("/shop/pay-success-page");
      }else {
        Toast.fail(res.message)
      }
    });
  };
  const { replace } = useHistory();
  return (
    <>
      <div className="_pay-now">
        <section className="left">
          应付金额： <Price>￥297.00</Price>
        </section>

        <aside className="_pay-now-btn" onTouchEnd={UP}>
          立即支付
        </aside>
      </div>
      <MyWhiteBlank height={112} />
    </>
  );
};

export default FillPayNow;
