import React, { FC, TouchEventHandler } from 'react';
import './index.less';
import { MyImage } from '../my-image';

type Props = {
  src: string;
  onTouchEnd: TouchEventHandler;
  white?: boolean;
};
const MyIcon: FC<Props> = (props: Props) => {
  return (
    <MyImage
      onTouchEnd={ props.onTouchEnd }
      className={ `_my-icon ${ props.white && 'white' }` }
      src={ props.src }
    />
  );
};

export default MyIcon;
