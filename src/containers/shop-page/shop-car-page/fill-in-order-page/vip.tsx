/**
 * @Description: 立即购买
 * @author 两万
 * @date 2020/1/8
 * @time 17:56
 */
import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { MyNavBar } from "../../../../components/my-nav-bar";
import MyAddressItem from "../../../my-page/components/my-address-item";
import { iconPic } from "../../../../config/image";
import MyIcon from "../../../../components/my-icon";
import { WingBlank } from "antd-mobile";
import MyWhiteBlank from "../../../../components/my-white-blank";
import MyList from "../../../../components/my-list";
import MyItem from "../../../../components/my-item";
import FillPayNow from "./fill-pay-now/vip";
import { useHistory } from "react-router";
import { MyBlueTag } from "../../../../components/my-tag";
import { useDispatch, useSelector } from "react-redux";
import { ReducersProps } from "../../../../redux/store";
import { BuyNowProps } from "../../../../redux/buy-now/reducer";
import { AjaxUserAddressList } from "../../../../api/address";
import OrderGoodItem from "../../components/order-good-item";
import { updateBuyNow } from "../../../../redux/buy-now/actions";

type Props = {};
const FillInOrderPage: FC<Props> = (props: Props) => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const data = useSelector<ReducersProps, BuyNowProps>(state => state.buyNow);
  console.log(data);
  const [list, setList] = useState<any>({});
  useEffect(() => {
    if (data.receiverAddressId !== "0") {
      return setList(data);
    }
    AjaxUserAddressList({ page: 1, size: 1000 }).then(res => {
      if (res) {
        const address = res?.data?.records.filter(
          (item: any) => item.isDefault === 1
        );
        if (address.length > 0) {
          dispatch(updateBuyNow({ ...data,...address[0], receiverAddressId: address[0].id }));
          setList(address[0]);
        } else {
          push("/shop/shop-car/add-consignee-page");
        }
      }
    });
  }, [data, push]);
  return (
    <div className="_fill-in-order-page">
      <MyNavBar>填写订单</MyNavBar>
      <WingBlank>
        <MyAddressItem
          name={list.name}
          phone={list.phone}
          phoneAfter={list.isDefault === 1 ? <MyBlueTag>默认</MyBlueTag> : ""}
          addressContent={
            <span>
              {list.province +
                "" +
                list?.city +
                "" +
                list?.region +
                "" +
                list?.address}
            </span>
          }
          onClick={() => push("/shop/shop-car/select-consignee-page")}
          rightContent={<MyIcon src={iconPic.more} onTouchEnd={() => {}} />}
        />

        {/*<ul className="inputs">*/}
        {/*  <li>*/}
        {/*    <BlackLabel>真实姓名</BlackLabel>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      placeholder={"因海关需要，请填写收货人真实姓名"}*/}
        {/*    />*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <BlackLabel>身份证号</BlackLabel>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      placeholder={"因海关需要，请填写收货人身份证号"}*/}
        {/*    />*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </WingBlank>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <WingBlank>
        <OrderGoodItem showBorderBottom={false} data={data} />
      </WingBlank>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <MyList>
        <MyItem
          arrow
          right={<span style={{ color: "#21A3CD" }}>0张可用</span>}
          label={"优惠券"}
        />
        <MyItem arrow right={"￥"+ (data.vipPrice )} label={"商品合计"} />
        <MyItem arrow right={"￥0.00"} label={"运费"} />
        <MyItem arrow right={"￥0.00"} label={"优惠券"} />
      </MyList>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <MyList>
        <MyItem arrow right={"不开发票"} label={"发票信息"} />
      </MyList>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <FillPayNow all={ (data.payAmount||data.seckillPrice ||data.salePrice || data.vipPrice)}/>
    </div>
  );
};

export default FillInOrderPage;
