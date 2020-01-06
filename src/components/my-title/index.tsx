import React, { FC, ReactNode } from 'react';
import './index.less';

type MyTitleProps = {
  children: string | ReactNode;
};
const MyTitle: FC<MyTitleProps> = (props: MyTitleProps) => {
  return <div className="_my-title">{ props.children }</div>;
};

export const MyCenterTitle: FC<MyTitleProps> = (props: MyTitleProps) => {
  return <div className="my-center-title">{ props.children }</div>;
};
export default MyTitle;
