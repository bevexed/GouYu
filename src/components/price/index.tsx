import React, { FC, ReactNode } from 'react';
import './index.less';
import { iconPic } from '../../config/image';

type PriceProps = {
  children: ReactNode;
};

export const OriginPrice: FC<PriceProps> = (props: PriceProps) => {
  return <div className="_origin-price">{ props.children }</div>;
};

export const Price: FC<PriceProps> = (props: PriceProps) => {
  return <div className="_price">{ props.children }</div>;
};

export const VipPrice: FC<PriceProps> = (props: PriceProps) => {
  return (
    <div className="_vip-price">
      <img src={ iconPic.vip } alt=""/>
      <span className="vip">￥{ props.children }</span>
    </div>
  );
};

