import React, { FC } from 'react';
import './index.less';
import { WingBlank } from 'antd-mobile';
import MyWhiteBlank from '../../../../components/my-white-blank';
import { MyBuyButton } from '../../../../components/my-button';
import { Price } from "../../../../components/price";

interface VipGoodProps {
}

const VipGood: FC<VipGoodProps> = (props: VipGoodProps) => {
  return (
    <>
      <WingBlank>
        <div className="vip-good">
          <img
            className="good-img"
            src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/877603842/O1CN01dabYkw1eFgGAkhJxP_!!877603842-0-pixelsss.jpg_180x180.jpg_.webp"
            alt={ '' }
          />
          <section className="right">
            <div className="title">护肝养胃 熬夜&酒局必备</div>
            <div className="dis">澳洲进口，swisse奶蓟草护肝片</div>
            <div className="sold-out">
              <span>已售563件</span>
            </div>
            <div className="price">
              <Price>￥888</Price>
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
        <VipGood key={ index }/>
      )) }
    </div>
  );
};

export default VipGoodList;
