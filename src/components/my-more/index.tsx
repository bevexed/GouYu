import React, { FC, ReactNode } from 'react';
import './index.less';
import { iconPic } from '../../config/image';
import { WingBlank } from 'antd-mobile';
import { useHistory } from 'react-router';
import MyTitle from "../my-title";

type MyMoreProps = {
  children: string | ReactNode;
  path: string;
  rightContent?: string | ReactNode;
};
const MyMore: FC<MyMoreProps> = (props: MyMoreProps) => {
  const { push } = useHistory();
  return (
    <div className="my-more">
      <WingBlank>
        <header>
          <MyTitle>{ props.children }</MyTitle>
          <p onTouchStart={ () => push(props.path) }>
            { props.rightContent || '更多' }
          </p>
          <img
            onTouchStart={ () => push(props.path) }
            src={ iconPic.more }
            alt=""
          />
        </header>
      </WingBlank>
    </div>
  );
};

export default MyMore;
