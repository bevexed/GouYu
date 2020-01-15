/**
 * @Description: 订单列表页的商品项
 * @author 两万
 * @date 2019/12/25
 * @time 14:03
 */
import React, { FC } from "react";
import "./index.less";
import { MyImage } from "../../../../components/my-image";
import { Price } from "../../../../components/price";

type Props = {
  showBorderBottom: boolean;
  [key: string]: any;
};
const OrderGoodItem: FC<Props> = (props: Props) => {
  console.log(props);
  return (
    <div
      className="_order-good-item"
      style={{ borderWidth: props.showBorderBottom ? "2px" : 0 }}
    >
      <MyImage className="_order-good-item-img" src={ props?.data?.goodsImage} />

      <aside>
        <div className="title">{props?.data?.goodsName} </div>
        <div className="sub-title">{props?.data?.twoAttributeValue}</div>
        <footer>
          <Price>￥{ props?.data?.memberPrice||props?.data?.seckillPrice || props?.data?.vipPrice}</Price>
          <p className="num">×{props?.data?.number||props?.data?.soldNumber}</p>
        </footer>
      </aside>
    </div>
  );
};

export default OrderGoodItem;
