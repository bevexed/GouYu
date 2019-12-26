import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';

type Props = {};
const AddConsigneePage: FC<Props> = (props: Props) => {
  return (
    <div className="add-consignee-page">
      <MyNavBar>新增收货人</MyNavBar>
    </div>
  );
};

export default AddConsigneePage;
