import React, { FC } from 'react';
import './index.less';
import MyCheckBox from '../../../../../../components/my-check-box';
import { MyImage } from "../../../../../../components/my-image";
import { iconPic } from "../../../../../../config/image";

type Props = {};
const ShopCarItemHeader: FC<Props> = (props: Props) => {
  return (
    <div className="_shop-car-item-header">
      <MyCheckBox
        onChange={ a => {
          console.log(a);
        } }
      />
      <MyImage className='shop-img'
               src='https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/383301414/O1CN01fjl5Go1MJecL2pDEe_!!0-item_pic.jpg_250x250.jpg_.webp'/>
      <div className="shop-name">
        桌宜家居旗舰店
      </div>
      <MyImage src={ iconPic.more } onTouchEnd={ () => {
      } } className='more'/>
    </div>
  );
};

export default ShopCarItemHeader;
