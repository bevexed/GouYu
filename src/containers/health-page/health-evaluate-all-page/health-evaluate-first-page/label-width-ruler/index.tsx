import React, { FC, ReactNode } from 'react';
import './index.less';
import MyRuler from '../ruler';
import { MyImage } from '../../../../../components/my-image';

type LabelWithRulerProps = {
  children: ReactNode;
};
const LabelWithRuler: FC<LabelWithRulerProps> = (
  props: LabelWithRulerProps,
) => {
  return (
    <div className="label-width-ruler">
      <div className="left">{ props.children }</div>
      <MyRuler/>
    </div>
  );
};

interface Label {
  imgUrl: string;
  label: string;
  unit?: string;
}

export const MyLabel: FC<Label> = props => (
  <div className="_label">
    <MyImage src={ props.imgUrl } className={ '_label-icon' }/>
    <p className={ '_label-name' }>{ props.label }
      <span className='_label-unit'>{ props.unit }</span>
    </p>
  </div>
);

export default LabelWithRuler;
