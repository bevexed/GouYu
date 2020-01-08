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
import MyTitle from "../../../../components/my-title";
import MyCheckBox from "../../../../components/my-check-box";
import FillPayNow from "./fill-pay-now";
import { BlackLabel } from "../../../../components/price";
import { useHistory } from "react-router";
import { MyBlueTag } from "../../../../components/my-tag";
import { useSelector } from "react-redux";
import { ReducersProps } from "../../../../redux/store";
import { BuyNowProps } from "../../../../redux/buy-now/reducer";
import { AjaxUserAddressList } from "../../../../api/address";
import OrderGoodItem from "../../components/order-good-item";

type Props = {};
const FillInOrderPage: FC<Props> = (props: Props) => {
  const data = useSelector<ReducersProps, BuyNowProps>(state => state.buyNow);
  const [list, setList] = useState<any>({});
  console.log(list,data);
  useEffect(() => {
    if (data.receiverAddressId !== '0') {
      return setList(data)
    }
    AjaxUserAddressList({ page: 1, size: 1000 }).then(res => {

      const address = res.data.records.filter((item: any) => item.isDefault === 1);
      address.length > 0
        ? setList(address[0])
        : push("/shop/shop-car/add-consignee-page");
    });
  }, []);
  const { push } = useHistory();
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
              {list?.province + list?.city + list?.region + list?.address}
            </span>
          }
          onClick={() => push("/shop/shop-car/select-consignee-page")}
          rightContent={<MyIcon src={iconPic.more} onTouchEnd={() => {}} />}
        />

        <ul className="inputs">
          <li>
            <BlackLabel>真实姓名</BlackLabel>
            <input
              type="text"
              placeholder={"因海关需要，请填写收货人真实姓名"}
            />
          </li>
          <li>
            <BlackLabel>身份证号</BlackLabel>
            <input
              type="text"
              placeholder={"因海关需要，请填写收货人身份证号"}
            />
          </li>
        </ul>
      </WingBlank>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <WingBlank>
        <OrderGoodItem showBorderBottom={false} data={data} />
      </WingBlank>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <MyList>
        <MyItem
          arrow
          right={<span style={{ color: "#21A3CD" }}>5张可用</span>}
          label={"优惠券"}
        />
        <MyItem arrow right={"￥297.00"} label={"商品合计"} />
        <MyItem arrow right={"￥0.00"} label={"运费"} />
        <MyItem arrow right={"￥297.00"} label={"优惠券"} />
      </MyList>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <MyList>
        <MyItem arrow right={"不开发票"} label={"发票信息"} />
      </MyList>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <MyList renderHeader={<MyTitle>支付方式</MyTitle>}>
        <MyItem
          right={<MyCheckBox onChange={() => {}} />}
          icon={<MyIcon src={iconPic.zfb_react} />}
          label={"支付宝支付"}
        />
        <MyItem
          right={<MyCheckBox onChange={() => {}} />}
          icon={<MyIcon src={iconPic.wx_react} />}
          label={"微信支付"}
        />
      </MyList>

      <FillPayNow />
    </div>
  );
};

export default FillInOrderPage;
