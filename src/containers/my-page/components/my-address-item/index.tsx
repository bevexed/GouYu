/**
 * @Description: 我的地址列表项
 * @author 两万
 * @date 2019/12/24
 * @time 18:46
 */
import React, { FC, ReactNode } from 'react';
import './index.less';

type Props = {
  name: string;
  phone: string;
  rightContent: ReactNode;
  addressContent: ReactNode;
  onClick?: (a:any)=>void;
  phoneAfter?: ReactNode
};
const MyAddressItem: FC<Props> = (props: Props) => {
  return (
    <div className="_my-address-item" onClick={ props.onClick }>
      <div className="_my-address-item-left">
        <header>
          <span className="name">{ props.name }</span>
          <span className="phone">{ props.phone }</span>
          { props.phoneAfter }
        </header>
        <footer className="address">
          { props.addressContent }
        </footer>
      </div>

      <div className="_my-address-item-right">{ props.rightContent }</div>
    </div>
  );
};

export default MyAddressItem;
