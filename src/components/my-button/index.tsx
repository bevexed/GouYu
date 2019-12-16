import React, { FC, TouchEventHandler } from 'react';
import './index.less';

interface Prop {
  children: string | HTMLElement;
  onTouchEnd?: TouchEventHandler;
  height?: number;
  width?: number;
}

export const MyButton: FC<Prop> = (prop: Prop) => {
  return (
    <div
      className="my-btn"
      style={ {
        height: prop.height + 'px',
        width: prop.width + 'px',
      } }
      onTouchEnd={ prop.onTouchEnd }>
      { prop.children }
    </div>
  );
};

interface MyBuyButtonProps extends Partial<Prop> {
  // 卖光 | 买
  state: 'soldOut' | 'buy' | 'free' | 'buyToVip';
}

export const MyBuyButton: FC<MyBuyButtonProps> = (props: MyBuyButtonProps) => {
  let backgroundColor, content;
  switch (props.state) {
    case 'buy':
      backgroundColor = '#E92B2C';
      content = '购买';
      break;
    case 'soldOut':
      backgroundColor = '#ccc';
      content = '购买';
      break;
    case 'free':
      backgroundColor = '#E92B2C';
      content = '免费领取';
      break;
    case 'buyToVip':
      backgroundColor = '#E92B2C';
      content = '购买成为VIP';
  }

  return (
    <div
      className="my-buy-button"
      style={ {
        backgroundColor,
      } }>
      { content }
    </div>
  );
};

export const GoToShopButton: FC<Partial<Prop>> = props => {
  return <div className="go-to-shop-button">进店</div>;
};

interface LotteryButtonProps extends Prop {
  className?: string;
}

export const LotteryButton: FC<LotteryButtonProps> = props => {
  return (
    <div
      className={ ['_lottery-button', props.className].join(' ') }
      onTouchEnd={ props.onTouchEnd }>
      { props.children }
    </div>
  );
};
