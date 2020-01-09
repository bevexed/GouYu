import React, { FC } from 'react';
import './index.less';
import { Progress, WingBlank } from 'antd-mobile';
import MyWhiteBlank from '../../../../components/my-white-blank';
import { MyBuyButton } from '../../../../components/my-button';
import { useHistory } from "react-router";

interface VipGoodProps {
  goodsImage: string;
  goodsDescribe:string;
  goodsTitle:string;
  goodsName:string;
  stock:number;
  [key:string]:any
}

const VipGood: FC<VipGoodProps> = (props: VipGoodProps) => {
  const {push} = useHistory();
  return (
    <>
      <WingBlank>
        <div className="_vip-good" onClick={()=>push('/')}>
          <img className="_good-img" src={props.goodsImage} alt={props.goodsDescribe} />
          <section className="right">
            <div className="title">{props.goodsName}</div>
            <div className="dis">{props.goodsTitle}</div>
            <div className="sold-out">
              <span>已有{props.soldNumber}位用户免费领取</span>
              <MyBuyButton state={'free'} />
            </div>
            <div className="price">
              <span>￥{props.vipPrice}</span>
              <span>仅剩{props.stock}件</span>
              <Progress
                percent={40}
                position="normal"
                unfilled={false}
                appearTransition
                barStyle={{ borderColor: '#E92B2C' }}
                style={{
                  border: '1px solid #E92B2C',
                  borderRadius: '5px',
                  width: 144 / 2,
                }}
              />
            </div>
          </section>
        </div>
      </WingBlank>
      <MyWhiteBlank backgroundColor={'#F3F7F7'} />
    </>
  );
};

 export type VipGoodListProps = {
  vipGoodList: VipGoodProps[];
};
const VipGoodList: FC<VipGoodListProps> = (props: VipGoodListProps) => {
  return (
    <div className="vip-good-list">
      {props.vipGoodList.map((item, index) => (
        <VipGood key={index} {...item}/>
      ))}
    </div>
  );
};

export default VipGoodList;
