import React, { FC, useState } from 'react';
import './index.less';
import MyCheckBox from '../../../../../../components/my-check-box';
import { MyImage } from '../../../../../../components/my-image';
import { MyBlueTag } from '../../../../../../components/my-tag';
import { OriginPrice, Price } from '../../../../../../components/price';
import MyStepper from '../../../../../../components/my-stepper';
import { WhiteSpace } from 'antd-mobile';

type Props = {};
const ShopCarItemList: FC<any> = (props) => {
  return (
    <div className="_shop-car-item-list">
      { props.shoppingCartList.map((item:any, key:number) => (
        <div key={ key }>
          <ShopCarItemListItem {...item}/>
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

const ShopCarItemListItem: FC<any> = props => {
  const [num, setNum] = useState(0);
  return (
    <div className="_shop-car-item-list-item">
      <MyCheckBox onChange={ () => {
      } }/>
      <MyImage
        src={
         props.pic
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
          <Price>￥{props.memberPrice}</Price>
          <OriginPrice>￥{props.marketPrice}</OriginPrice>
          <MyStepper onChange={ setNum } val={ props.number }/>
        </footer>
      </section>
    </div>
  );
};

export default ShopCarItemList;
