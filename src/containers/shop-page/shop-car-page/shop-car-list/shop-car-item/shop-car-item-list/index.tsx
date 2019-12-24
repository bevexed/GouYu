import React, { FC, useState } from 'react';
import './index.less';
import MyCheckBox from '../../../../../../components/my-check-box';
import { MyImage } from '../../../../../../components/my-image';
import { MyBlueTag } from '../../../../../../components/my-tag';
import { OriginPrice, Price } from '../../../../../../components/price';
import MyStepper from '../../../../../../components/my-stepper';
import { WhiteSpace } from 'antd-mobile';

type Props = {};
const ShopCarItemList: FC<Props> = (props: Props) => {
  return (
    <div className="_shop-car-item-list">
      { new Array(3).fill(1).map((item, key) => (
        <div key={ key }>
          <ShopCarItemListItem/>
          { key < 2 && (
            <>
              <WhiteSpace size={ 'lg' }/>
              <div className="hr"/>
              <WhiteSpace size={ 'lg' }/>
            </>
          ) }
        </div>
      )) }
    </div>
  );
};

const ShopCarItemListItem: FC<Props> = props => {
  const [num, setNum] = useState(0);
  return (
    <div className="_shop-car-item-list-item">
      <MyCheckBox onChange={ () => {
      } }/>
      <MyImage
        src={
          'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2990351630/O1CN01QKIBGO1NuaAPhHD2j_!!0-item_pic.jpg_250x250.jpg_.webp'
        }
        className="_shop-car-item-list-item-img"
      />
      <section className={ 'dis' }>
        <p className="title">护肝养胃，活力十足，清苷朝鲜蓟</p>
        <p className="sub-title">蔓越莓</p>
        <div className="tags">
          <MyBlueTag round={ true }>限时秒</MyBlueTag>
        </div>
        <footer>
          <Price>￥123</Price>
          <OriginPrice>￥49</OriginPrice>
          <MyStepper onChange={ setNum } val={ num }/>
        </footer>
      </section>
    </div>
  );
};

export default ShopCarItemList;
