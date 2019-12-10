import React, { FC, ReactNode } from 'react';
import './index.less';

type Props = {
  children: string | ReactNode;
};
const MyTag: FC<Props> = (props: Props) => {
  return <div className='my-tag'>{ props.children }</div>;
};

export default MyTag;
