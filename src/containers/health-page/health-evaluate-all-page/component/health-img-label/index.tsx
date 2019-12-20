import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../../../components/my-image';

export type HealthImgLabelProps = {
  imgUrl: string;
  label: string;
};
const HealthImgLabel: FC<HealthImgLabelProps> = (
  props: HealthImgLabelProps,
) => {
  return (
    <div className="health-img-label">
      <MyImage src={ props.imgUrl } className="health-img-label-icon"/>
      <p className="health-img-label-label">{ props.label }</p>
    </div>
  );
};

export default HealthImgLabel;
