import React, { FC } from "react";
import "./index.less";
import MyCheckBox from "../../../../../../components/my-check-box";
import OrderShopItem from "../../../../components/order-shop-item";
import { useDispatch } from "react-redux";
import { cancelShop, selectShop } from "../../../../../../redux/shop-car/actions";

type Props = {
  storeName: string;
  id: string;
  c?: boolean;
};
const ShopCarItemHeader: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="_shop-car-item-header">
      <MyCheckBox
        value={props.c}
        onChange={a => {
          if (a) {
            dispatch(selectShop(props.id));
          } else {
            dispatch(cancelShop(props.id));
          }
        }}
      />
      <div style={{ width: "15Px" }} />
      <OrderShopItem id={props.id} storeName={props.storeName} />
    </div>
  );
};

export default ShopCarItemHeader;
