/**
 * @Description: 列表
 * @author 两万
 * @date 2019/12/25
 * @time 14:39
 */

import React, { FC, ReactNode } from 'react';
import './index.less';
import { WingBlank } from 'antd-mobile';
import MyWhiteBlank from '../my-white-blank';

type Props = {
  children: ReactNode;
  renderHeader?: ReactNode;
  renderFooter?: ReactNode;
};
const MyList: FC<Props> = (props: Props) => {
  return (
    <WingBlank className="_my-list">
      { props.renderHeader && (
        <>
          { props.renderHeader }
          <MyWhiteBlank height={ 2 } backgroundColor={ '#EDEDED' }/>
        </>
      ) }
      { props.children }
      { props.renderFooter }
    </WingBlank>
  );
};

export default MyList;
