import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { MyNavBar } from "../../../../components/my-nav-bar";
import MyAddressItem from "../../../my-page/components/my-address-item";
import MyCheckBox from "../../../../components/my-check-box";
import { Toast, WingBlank } from "antd-mobile";
import { MyBlueTag } from "../../../../components/my-tag";
import { iconPic } from "../../../../config/image";
import { useHistory } from "react-router";
import { MyImage } from "../../../../components/my-image";
import { GrayLabel } from "../../../../components/price";
import MyWhiteBlank from "../../../../components/my-white-blank";
import { MyBottomButton } from "../../../../components/my-button";
import { AjaxUserAddressEditDefault, AjaxUserAddressList } from "../../../../api/address";
import { useDispatch } from "react-redux";
import { updateBuyNow } from "../../../../redux/buy-now/actions";

type Props = {};
const SelectConsigneePage: FC<Props> = (props: Props) => {
  const { push, go } = useHistory();
  const dispath = useDispatch();
  const selectAddress = (item: any) => {
    dispath(
      updateBuyNow({
        receiverAddressId: item.id,
        ...item
      })
    );
    go(-1)
  };

  const siteDefault = (id: number) => {
    AjaxUserAddressEditDefault(id).then(res => {
      if (res.status === 0) {
        Toast.success(res.message, 1.5, () => go(0));
      }
    });
  };
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    AjaxUserAddressList({ page: 1, size: 1000 }).then(res =>
      setList(res.data.records)
    );
  }, []);
  return (
    <div className="select-consignee-page">
      <MyNavBar>选择收货人</MyNavBar>
      {list.map((item, key) => (
        <div key={key}>
          <WingBlank>
            <MyAddressItem
              name={item.name}
              phone={item.phone}
              onClick={()=>selectAddress(item)}
              phoneAfter={
                <>
                  <MyImage src={iconPic.edit} className="edit-icon" />
                  <GrayLabel>编辑</GrayLabel>
                </>
              }
              addressContent={
                <>
                  {item.isDefault === 1 && <MyBlueTag>默认</MyBlueTag>}
                  <span>
                    {" "}
                    {item.province + item.city + item.region + item.address}
                  </span>
                </>
              }
              rightContent={
                <MyCheckBox onChange={(e) => siteDefault(item.id)} />
              }
            />
          </WingBlank>

          <MyWhiteBlank backgroundColor={"#F8F9FA"} />
        </div>
      ))}

      <MyBottomButton
        onTouchEnd={() => push("/shop/shop-car/add-consignee-page")}
      >
        添加新收获人
      </MyBottomButton>
    </div>
  );
};

export default SelectConsigneePage;
