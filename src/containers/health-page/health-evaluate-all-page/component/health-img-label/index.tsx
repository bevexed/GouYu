import React, { FC, TouchEventHandler } from 'react';
import './index.less';
import { MyImage } from '../../../../../components/my-image';

export type HealthImgLabelProps = {
  imgUrl: string;
  label: string;
  onTouchEnd: TouchEventHandler;
  isSelected: boolean;
};
const HealthImgLabel: FC<HealthImgLabelProps> = (
  props: HealthImgLabelProps,
) => {
  return (
    <div
      className={ ['health-img-label', props.isSelected && 'active'].join(' ') }
      onTouchEnd={ props.onTouchEnd }>
      <MyImage
        src={ props.imgUrl }
        className={ ['health-img-label-icon', props.isSelected && 'active'].join(
          ' ',
        ) }
      />
      <p
        className="health-img-label-label"
        style={ { color: props.isSelected ? '#fff' : '#747978' } }>
        { props.label }
      </p>
    </div>
  );
};

export default HealthImgLabel;
