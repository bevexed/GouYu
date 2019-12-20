import React, { FC } from 'react';
import './index.less';
import MyTimePicker from '../my-time-picker';
import { MyLabel } from '../../health-evaluate-first-page/label-width-ruler';

type Props = {
  hour: string;
  second: string;
  imgUrl: string;
  label: string;
};

const LabelWidthTimePicker: FC<Props> = (props: Props) => {
  return (
    <div className="label-width-time-picker">
      <MyLabel imgUrl={ props.imgUrl } label={ props.label }/>
      <div className={ 'blank' }/>
      <MyTimePicker hour={ props.hour } second={ props.second }/>
    </div>
  );
};

export default LabelWidthTimePicker;
