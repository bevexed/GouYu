/**
 * @Description: 填写订单页面的 底部支付按钮
 * @author 两万
 * @date 2019/12/25
 * @time 15:23
 */

import React, { FC, useState } from "react";
import "./index.less";
import MyWhiteBlank from "../../../../../components/my-white-blank";
import { Price } from "../../../../../components/price";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { ReducersProps } from "../../../../../redux/store";
import { BuyNowProps } from "../../../../../redux/buy-now/reducer";
import { AjaxOrderBuyNowOrdinaryGoods, AjaxOrderSubmissionOrdinaryGoods } from "../../../../../api/order";
import { Toast } from "antd-mobile";
import { AppAliPay, AppWxPay, isApp } from "../../../../../util/dsbridge";
import MyList from "../../../../../components/my-list";
import MyTitle, { MyCenterTitle } from "../../../../../components/my-title";
import MyItem from "../../../../../components/my-item";
import MyCheckBox from "../../../../../components/my-check-box";
import MyIcon from "../../../../../components/my-icon";
import { iconPic } from "../../../../../config/image";
import { MyBottomButton } from "../../../../../components/my-button";

type Props = {};
const FillPayNow: FC<Props> = (props: Props) => {
  let [payType, setPayType] = useState<string>("zfb");
  const [open, setOpen] = useState(false);
  console.log(payType);
  const {
    couponId,
    receiverAddressId,
    goodsId,
    buyQuantity,
    skuId,
    name,
    idCard,
    storeId
  } = useSelector<ReducersProps, BuyNowProps>(state => state.buyNow);
  const data = {
    couponId,
    receiverAddressId,
    goodsId,
    buyQuantity,
    skuId,
    name,
    idCard,
    storeId
  };

  const SURE = () => {
    const data = { goodsId, skuId, buyQuantity, storeId };
    AjaxOrderBuyNowOrdinaryGoods(data).then(res => {
      if (res.success) {
        setOpen(true)
      }
    });
  };

  const UP = () => {
    AjaxOrderSubmissionOrdinaryGoods({
      ...data
    }).then(res => {
      if (res.status === 0) {
        if (isApp()) {
          if (payType === "wx") {
            AppWxPay(res.data.payOrderNumber);
          } else {
            AppAliPay(res.data.payOrderNumber);
          }
          return;
        }
        replace("/shop/pay-success-page");
      } else {
        Toast.fail(res.message);
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

        <aside className="_pay-now-btn" onTouchEnd={SURE}>
          立即支付
        </aside>
      </div>

      {open ? (
        <div className={"big-wrap"}>
          <MyIcon src={iconPic.close} onTouchEnd={() => setOpen(false)} />
          <div className={"_wrap"}>
            <MyCenterTitle>
              <Price>
                <span style={{ color: "#000" }}>付款</span> 29:59
              </Price>
            </MyCenterTitle>
            <MyList renderHeader={<MyTitle>支付方式</MyTitle>}>
              <MyItem
                onClick={() => setPayType("zfb")}
                right={<MyCheckBox value={payType === "zfb"} />}
                icon={<MyIcon src={iconPic.zfb_react} />}
                label={"支付宝支付"}
              />
              <MyItem
                onClick={() => setPayType("wx")}
                right={<MyCheckBox value={payType === "wx"} />}
                icon={<MyIcon src={iconPic.wx_react} />}
                label={"微信支付"}
              />
            </MyList>

            <MyBottomButton onTouchEnd={UP}>去付款</MyBottomButton>
          </div>
        </div>
      ) : null}

      <MyWhiteBlank height={112} />
    </>
  );
};

export default FillPayNow;
