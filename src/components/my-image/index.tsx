import React from 'react';

type ImageProps = {
  src: string;
  className?: string;
  style?: object;
};
export const MyImage = (props: ImageProps) => {
  return <img { ...props } alt={ '' }/>;
};
