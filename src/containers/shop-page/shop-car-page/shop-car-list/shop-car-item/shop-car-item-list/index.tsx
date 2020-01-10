import React, { FC } from "react";
import "./index.less";
import MyCheckBox from "../../../../../../components/my-check-box";
import { MyImage } from "../../../../../../components/my-image";
import { MyBlueTag } from "../../../../../../components/my-tag";
import { OriginPrice, Price } from "../../../../../../components/price";
import MyStepper from "../../../../../../components/my-stepper";
import { WhiteSpace } from "antd-mobile";
import { AjaxShoppingCartUpdateGoodsShoppingCartNumber } from "../../../../../../api/shop-car";
import { useDispatch } from "react-redux";
import { ajaxGetShopCart, selectOneGood } from "../../../../../../redux/shop-car/actions";
import { useHistory } from "react-router";

type Props = {};
const ShopCarItemList: FC<any> = props => {
  return (
    <div className="_shop-car-item-list">
      {props.shoppingCartList.map((item: any, key: number) => (
        <div key={key}>
          <ShopCarItemListItem {...item} />
          {key < 2 && (
            <>
              <WhiteSpace size={"lg"} />
              <div className="hr" />
              <WhiteSpace size={"lg"} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const ShopCarItemListItem: FC<any> = props => {
  const { skuId, goodsId, storeId, number } = props;
  const { go } = useHistory();
  const dispatch = useDispatch();
  const changeNum = (number: number) => {
    AjaxShoppingCartUpdateGoodsShoppingCartNumber({
      skuId,
      goodsId,
      storeId,
      number
    }).then(res => {
      if (res.status === 1) {
        go(0);
      }
      dispatch(ajaxGetShopCart);
    });
  };
  console.log(props);
  return (
    <div className="_shop-car-item-list-item">
      <MyCheckBox
        value={props.c}
        onChange={a => {
          if (a) {
          } else {
            dispatch(selectOneGood(props.goodsId));
          }
        }}
      />
      <MyImage src={props.pic} className="_shop-car-item-list-item-img" />
      <section className={"dis"}>
        <p className="title">护肝养胃，活力十足，清苷朝鲜蓟</p>
        <p className="sub-title">蔓越莓</p>
        <div className="tags">
          <MyBlueTag round={true}>限时秒</MyBlueTag>
        </div>
        <footer>
          <Price>￥{props.memberPrice}</Price>
          <OriginPrice>￥{props.marketPrice}</OriginPrice>
          <MyStepper onChange={number => changeNum(number)} val={number} />
        </footer>
      </section>
    </div>
  );
};

export default ShopCarItemList;
