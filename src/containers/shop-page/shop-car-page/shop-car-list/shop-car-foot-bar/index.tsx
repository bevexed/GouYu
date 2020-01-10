import React, { FC } from "react";
import "./index.less";
import MyCheckBox from "../../../../../components/my-check-box";
import MyWhiteBlank from "../../../../../components/my-white-blank";
import { Price } from "../../../../../components/price";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ReducersProps } from "../../../../../redux/store";
import { ajaxGetShopCart, cancelAll, selectAll } from "../../../../../redux/shop-car/actions";
import { AjaxShoppingCartDelCartGoods } from "../../../../../api/shop-car";
import { Toast } from "antd-mobile";

type Props = {};
const ShopBarFootBar: FC<Props> = (props: Props) => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const shopCar = useSelector<ReducersProps, any[]>(state => state.shopCar);
  const isSelectAll = () =>
    shopCar.every(
      item => item.c && item.shoppingCartList.every((good: any) => good.c)
    );
  return (
    <>
      <div className="_shop-car-foot-bar">
        <div className="left">
          <MyCheckBox
            value={isSelectAll()}
            onChange={a => {
              if (a) {
                dispatch(selectAll());
              } else {
                dispatch(cancelAll());
              }
            }}
          />
          <span className="label">全选</span>
          <span className="all">商品总价：</span>
          <Price>￥100</Price>
        </div>
        <div
          className="button"
          onTouchEnd={() => push("/shop/fill-in-order-page")}
        >
          结算
        </div>
      </div>
      <MyWhiteBlank height={112} />
    </>
  );
};

export default ShopBarFootBar;

export const ShopBarFootBar2: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const shopCar = useSelector<ReducersProps, any[]>(state => state.shopCar);
  const isSelectAll = () =>
    shopCar.every(
      item => item.c && item.shoppingCartList.every((good: any) => good.c)
    );
  const deleteGood = () => {
    let storeIds: any[] = [],
      goodsIds: any[] = [];
    shopCar.forEach(item => {
      if (item.c) {
        storeIds.push(item.id);
        item.shoppingCartList.forEach((good: any) => {
          if (good.c) {
            goodsIds.push(good.goodsId);
          }
        });
      }
    });
    AjaxShoppingCartDelCartGoods({
      storeIds: storeIds.join(","),
      goodsIds: goodsIds.join(",")
    }).then(res=>{
      if (res.status === 0) {
        Toast.success('删除成功', 1.5, () => dispatch(ajaxGetShopCart));
      }
    });
  };
  return (
    <>
      <div className="_shop-car-foot-bar">
        <div className="left">
          <MyCheckBox
            value={isSelectAll()}
            onChange={a => {
              if (a) {
                dispatch(selectAll());
              } else {
                dispatch(cancelAll());
              }
            }}
          />
          <span className="label">全选</span>
        </div>
        <div className="button">移到收藏</div>
        <div className="button2" onClick={deleteGood}>
          删除
        </div>
      </div>
      <MyWhiteBlank height={112} />
    </>
  );
};
