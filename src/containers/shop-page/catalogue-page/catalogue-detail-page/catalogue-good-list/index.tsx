import React, { FC } from 'react';
import './index.less';
import MyTag from '../../../../../components/my-tag';
import { iconPic } from '../../../../../config/image';
import MyWhiteBlank from "../../../../../components/my-white-blank";

type GoodItemProps = {
  [key:string]:any
};

type GoodListProps = {
  goodList: GoodItemProps[];
};

export const GoodItem: FC<GoodItemProps> = (props: GoodItemProps) => {
  return (
    <>
      <div className="good-item">
        <img className="good-img" src={ props.goodsImage } alt=""/>
        <section className="right">
          <div className="title">{ props.goodsName }</div>

          <div className="price">
            {props.vipDisparityPrice &&<MyTag>VIP省 ￥{props.vipDisparityPrice}</MyTag>}
            {props.goldVipOneCommission&&<MyTag>分享赚 ￥{props.goldVipOneCommission}</MyTag>}
            <div className="ori">¥{props.marketPrice}</div>
          </div>


          <footer>
            <span className="del">￥{props.salePrice}</span>
            <img src={ iconPic.vip } alt=""/> <span className="vip">￥{props.memberPrice}</span>
            <div className="sold-out">已售{props.soldNumber}件</div>

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
