import React, { FC, ReactNode } from 'react';
import './index.less';

type Props = {
  children: string | ReactNode;
};
export const MyTag: FC<Props> = (props: Props) => {
  return <div className='my-tag'>{ props.children }</div>;
};

export default MyTag;


export const MyBorderTag: FC<Props> = (props: Props) => {
  return <div className='my-border-tag'>{ props.children }</div>;
};

export const MyGrayTag: FC<Props> = (props: Props) => {
  return <div className='my-gray-tag'>{ props.children }</div>;
};
