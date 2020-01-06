import React, { FC, ReactNode } from 'react';
import './index.less';
import { iconPic } from '../../config/image';

type PriceProps = {
  children: ReactNode;
  ellipsis?:boolean;
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

interface GrayLabelProps  extends PriceProps{

}
export const GrayLabel: FC<GrayLabelProps> = props => (
  <div className={["_gray-label",props.ellipsis ? 'ellipsis':''].join(' ')}>{ props.children }</div>
);

export const BlackLabel: FC<PriceProps> = props => (
  <div className="_black-label">{ props.children }</div>
);

export const BlueLabel: FC<PriceProps> = props => (
  <div className="_blue-label">{ props.children }</div>
);
