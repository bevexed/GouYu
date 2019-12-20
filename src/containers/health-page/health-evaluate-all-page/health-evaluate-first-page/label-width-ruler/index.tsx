import React, { FC, ReactNode } from 'react';
import './index.less';
import MyRuler from '../ruler';

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

export default LabelWithRuler;
