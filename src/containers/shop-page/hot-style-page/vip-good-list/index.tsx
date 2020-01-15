import React, { FC } from 'react';
import './index.less';
import { WingBlank } from 'antd-mobile';
import MyWhiteBlank from '../../../../components/my-white-blank';
import { MyBuyButton } from '../../../../components/my-button';
import { Price } from "../../../../components/price";
import { useHistory } from "react-router";

interface VipGoodProps {
}

const VipGood: FC<any> = (props) => {
  const {push} = useHistory()
  const go = () => {
    window.scrollTo(0, 0);
    push("/good-vip-page/" + props.id);
  };
  return (
    <>
      <WingBlank>
        <div className="_vip-good" onClick={go}>
          <img
            className="good-img"
            src={props.goodsImage}
            alt={ '' }
          />
          <section className="right">
            <div className="title">{props.goodsName}</div>
            <div className="dis">{props.goodsTitle}</div>
            <div className="sold-out">
              <span>已售{props.soldNumber}件</span>
            </div>
            <div className="price">
              <Price>￥{props.vipPrice}</Price>
              <MyBuyButton state={ "buyToVip" }/>
            </div>
          </section>
        </div>
      </WingBlank>
      <MyWhiteBlank backgroundColor={ '#F3F7F7' }/>
    </>
  );
};

type VipGoodListProps = {
  vipGoodList: VipGoodProps[];
};
const VipGoodList: FC<VipGoodListProps> = (props: VipGoodListProps) => {
  return (
    <div className="vip-good-list">
      { props.vipGoodList.map((item, index) => (
        <VipGood key={ index } {...item}/>
      )) }
    </div>
  );
};

export default VipGoodList;
