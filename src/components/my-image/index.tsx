import React, { ImgHTMLAttributes, TouchEventHandler } from 'react';

interface ImageProps extends ImgHTMLAttributes<any>{
  src: string;
  className?: string;
  style?: object;
  onTouchEnd?: TouchEventHandler;
  alt?:string
}
export const MyImage = (props: ImageProps) => {
  return <img { ...props } alt={ props.alt }/>;
};
