import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { MyNavBar } from "../../../components/my-nav-bar";
import MyWhiteBlank from "../../../components/my-white-blank";
import ShopBarFootBar, { ShopBarFootBar2 } from "./shop-car-list/shop-car-foot-bar";
import { useDispatch, useSelector } from "react-redux";
import { ajaxGetShopCart } from "../../../redux/shop-car/actions";
import ShopCarItemHeader from "./shop-car-list/shop-car-item/shop-car-item-header";
import ShopCarItemList from "./shop-car-list/shop-car-item/shop-car-item-list";
import { ReducersProps } from "../../../redux/store";
import { WingBlank } from "antd-mobile";

type Props = {};
const ShopCarPage: FC<Props> = (props: Props) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ajaxGetShopCart);
  }, [dispatch]);
  const shopCar = useSelector<ReducersProps, any[]>(state => state.shopCar);
  return (
    <div className="shop-car-page">
      <MyNavBar
        rightContent={<span className="shop-car-page-editor-btn" onClick={()=>setEdit(!edit)}>{edit?'完成':'编辑'}</span>}
      >
        购物车
      </MyNavBar>
      <MyWhiteBlank backgroundColor={"#F8F9FA"} />
      <WingBlank>
        {shopCar.map((item: any, key) => (
          <div key={key}>
            <ShopCarItemHeader id={item.id} storeName={item.storeName} {...item}/>
            <ShopCarItemList {...item} />
          </div>
        ))}
      </WingBlank>
      {!edit ? <ShopBarFootBar /> : <ShopBarFootBar2 />}
    </div>
  );
};

export default ShopCarPage;
