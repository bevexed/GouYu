/**
 * @Description: 订单列表页的商品项
 * @author 两万
 * @date 2019/12/25
 * @time 14:03
 */
import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../../components/my-image';
import { Price } from '../../../../components/price';

type Props = {
  showBorderBottom: boolean;
};
const OrderGoodItem: FC<Props> = (props: Props) => {
  return (
    <div
      className="_order-good-item"
      style={ { borderWidth: props.showBorderBottom ? '2px' : 0 } }>
      <MyImage
        className="_order-good-item-img"
        src={
          'https://img.alicdn.com/tfscom/i1/28306811/TB2qvcteYwTMeJjSszfXXXbtFXa_!!28306811.jpg_180x180xzq90.jpg_.webp'
        }
      />

      <aside>
        <div className="title">护肝养胃，活力十足，清苷朝鲜蓟</div>
        <div className="sub-title">蔓越莓</div>
        <footer>
          <Price>￥39</Price>
          <p className="num">×2</p>
        </footer>
      </aside>
    </div>
  );
};

export default OrderGoodItem;
