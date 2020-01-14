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
  return (
    <div
      className="_order-good-item"
      style={{ borderWidth: props.showBorderBottom ? "2px" : 0 }}
    >
      <MyImage className="_order-good-item-img" src={props.data.skuImage || props.data.pic} />

      <aside>
        <div className="title">护肝养胃，活力十足，清苷朝鲜蓟</div>
        <div className="sub-title">{props.data.twoAttributeValue}</div>
        <footer>
          <Price>￥{props.data.memberPrice||props.data.seckillPrice || props.data.salePrice}</Price>
          <p className="num">×{props.data.buyQuantity || props.data.salePrice}</p>
        </footer>
      </aside>
    </div>
  );
};

export default OrderGoodItem;
