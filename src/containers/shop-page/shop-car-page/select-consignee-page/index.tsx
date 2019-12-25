import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';

type Props = {};
const Index: FC<Props> = (props: Props) => {
  return (
    <div className="_select-consignee-page">
      <MyNavBar>选择收货人</MyNavBar>
    </div>
  );
};

export default Index;
