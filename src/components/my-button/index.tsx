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

interface MyBuyButtonProps extends Prop {
  state: 'red' | 'gray'
}

export const MyBuyButton: FC<MyBuyButtonProps> = (props: MyBuyButtonProps) => {
  return <div
    className={ 'my-buy-button' }
    style={ {
      backgroundColor: props.state
    } }
  >{ props.children }</div>;
};
