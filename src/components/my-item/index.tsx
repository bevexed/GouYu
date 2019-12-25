/**
 * @Description: 列表项
 * @author 两万
 * @date 2019/12/25
 * @time 14:38
 */

import React, { FC, ReactNode } from 'react';
import './index.less';
import { iconPic } from '../../config/image';
import { MyImage } from '../my-image';

type Props = {
  label: string;
  right: ReactNode;
  icon?: ReactNode;
  arrow?: boolean;
};
const MyItem: FC<Props> = (props: Props) => {
  return (
    <div className="_my-item">
      <section className="left">
        { props.icon && <div className="icon">{ props.icon }</div> }
        <span className="label">{ props.label }</span>
      </section>
      <aside className="right">
        <span> { props.right }</span>
        { props.arrow && <MyImage src={ iconPic.more } className="icon"/> }
      </aside>
    </div>
  );
};

export default MyItem;
