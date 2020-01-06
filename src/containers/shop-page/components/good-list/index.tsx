import React, { FC } from 'react';
import './index.less';
import MyTag from '../../../../components/my-tag';
import { iconPic } from '../../../../config/image';
import { MyBuyButton } from '../../../../components/my-button';
import MyWhiteBlank from "../../../../components/my-white-blank";
import { useHistory } from "react-router";

type GoodItemProps = any;

type GoodListProps = {
  goodList: any[];
};

export const GoodItem: FC<GoodItemProps> = (props) => {
  const {push} = useHistory()
  return (
    <>
      <div className="good-item">
        <img className="good-img" src={ props.goodsImage } alt=""/>
        <section className="right">
          <div className="title">{ props.goodsTitle }</div>

          <div className="price">
            <MyTag>VIP省 ￥{props.vipDisparityPrice}</MyTag>
            <MyTag>分享赚 ￥5.99</MyTag>
            <div className="ori">¥{props.marketPrice}</div>
          </div>

          <div className="sold-out">已售{props.soldNumber}件</div>

          <footer>
            <span className="del">￥{props.salePrice}</span>
            <img src={ iconPic.vip } alt=""/> <span className="vip">￥{props.memberPrice}</span>
            <MyBuyButton state={ 'buy' } onTouchEnd={()=>push('/good-page/'+props.id)}/>
          </footer>
        </section>
      </div>
      <MyWhiteBlank backgroundColor={ '#F3F7F7' }/>
    </>
  );
};

export const GoodList: FC<GoodListProps> = (props: GoodListProps) => {
  return (
    <div>
      { props.goodList.map((prop, index) => (
        <GoodItem { ...prop } key={ index }/>
      )) }
    </div>
  );
};
