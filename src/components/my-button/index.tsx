import React, { FC, TouchEventHandler } from 'react';
import './index.less';

interface Prop {
  onTouchEnd: TouchEventHandler;
  children: string | HTMLElement;
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
  state: 'soldOut' | 'buy';
}

export const MyBuyButton: FC<MyBuyButtonProps> = (props: MyBuyButtonProps) => {
  const backgroundColor = props.state === 'soldOut' ? '#ccc' : '#E92B2C';
  const content = props.state === 'soldOut' ? '已结束' : '购买';
  return (
    <div
      className={ 'my-buy-button' }
      style={ {
        backgroundColor,
      } }>
      { content }
    </div>
  );
};
