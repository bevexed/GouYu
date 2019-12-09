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
