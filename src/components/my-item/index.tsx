/**
 * @Description: 列表项
 * @author 两万
 * @date 2019/12/25
 * @time 14:38
 */

import React, { EventHandler, FC, ReactNode } from 'react';
import './index.less';
import { iconPic } from '../../config/image';
import { MyImage } from '../my-image';

type Props = {
  label: string;
  right?: ReactNode;
  icon?: ReactNode;
  arrow?: boolean;
  children?: ReactNode;
  onClick?: EventHandler<any>
};
const MyItem: FC<Props> = (props: Props) => {
  return (
    <div className="_my-item" onClick={props.onClick}>
      <section className="left">
        { props.icon && <div className="icon">{ props.icon }</div> }
        <span className="label">{ props.label }</span>
      </section>
      { props.children && (
        <section className="_my-item-children">{ props.children }</section>
      ) }
      <aside className="right">
        <span> { props.right }</span>
        { props.arrow && <MyImage src={ iconPic.more } className="icon"/> }
      </aside>
    </div>
  );
};

interface MySelectItemProps {
  checkBox: ReactNode;
  disc: string;
}

export const MySelectItem: FC<MySelectItemProps> = props => (
  <div className="_my-select-item">
    <div className="left">{ props.checkBox }</div>
    <div className="desc">{ props.disc }</div>
  </div>
);

export default MyItem;
