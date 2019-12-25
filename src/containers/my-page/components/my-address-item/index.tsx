/**
 * @Description: 我的地址列表项
 * @author 两万
 * @date 2019/12/24
 * @time 18:46
 */
import React, { FC, ReactNode, TouchEventHandler } from 'react';
import './index.less';
import { MyBlueTag } from '../../../../components/my-tag';

type Props = {
  border: boolean;
  rightContent: ReactNode;
  onTouchEnd?: TouchEventHandler
};
const MyAddressItem: FC<Props> = (props: Props) => {
  return (
    <div className="_my-address-item" onTouchEnd={ props.onTouchEnd }
         style={ { borderBottom: props.border ? '2px solid #ededed' : '' } }>
      <div className="_my-address-item-left">
        <header>
          <span className="name">王涛</span>
          <span className="phone">132****5121</span>
          <MyBlueTag>默认</MyBlueTag>
        </header>
        <footer className="address">浙江省杭州市西湖区剑桥公社E座B02</footer>
      </div>

      <div className="_my-address-item-right">{ props.rightContent }</div>
    </div>
  );
};

export default MyAddressItem;
