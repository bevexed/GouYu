import React, { FC } from "react";
import { MyImage } from "../../../../../components/my-image";
import './index.less'

interface Label {
  imgUrl: string;
  label: string;
  unit?: string;
}

export const MyHealthLabel: FC<Label> = props => (
  <div className="_label">
    <MyImage src={ props.imgUrl } className={ '_label-icon' }/>
    <p className={ '_label-name' }>{ props.label }
      <span className='_label-unit'>{ props.unit }</span>
    </p>
  </div>
);
