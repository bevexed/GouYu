import React, { TouchEventHandler } from 'react';

type ImageProps = {
  src: string;
  className?: string;
  style?: object;
  onTouchEnd?: TouchEventHandler;
};
export const MyImage = (props: ImageProps) => {
  return <img { ...props } alt={ '' }/>;
};
