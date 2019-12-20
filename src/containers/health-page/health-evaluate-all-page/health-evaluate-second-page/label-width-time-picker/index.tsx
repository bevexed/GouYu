import React, { FC } from 'react';
import './index.less';
import MyTimePicker from '../my-time-picker';
import { MyHealthLabel } from "../../component/health-label";

type Props = {
  hour: string;
  second: string;
  imgUrl: string;
  label: string;
};

const LabelWidthTimePicker: FC<Props> = (props: Props) => {
  return (
    <div className="label-width-time-picker">
      <MyHealthLabel imgUrl={ props.imgUrl } label={ props.label }/>
      <div className={ 'blank' }/>
      <MyTimePicker hour={ props.hour } second={ props.second }/>
    </div>
  );
};

export default LabelWidthTimePicker;
