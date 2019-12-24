import React, { FC, useState } from 'react';
import './index.less';
import { MyImage } from '../my-image';
import AddIcon from './image/btn_add_h@2x.png';
import CutIcon from './image/btn_cut_h@2x.png';

type Props = {
  val: number;
  onChange: (val: number) => void;
  defaultValue?: number;
  step?: number;
};
const MyStepper: FC<Props> = ({
                                val,
                                onChange,
                                defaultValue = 0,
                                step = 1,
                              }: Props) => {
  const [num, setNum] = useState(val || defaultValue);
  const add = () => {
    setNum(num + step);
    onChange(num + step);
  };
  const reduce = () => {
    const res = num - step > 0 ? num - step : 0;
    setNum(res);
    onChange(res);
  };

  return (
    <div className="_my-stepper">
      <MyImage src={ CutIcon } onTouchEnd={ reduce }/>
      <p>{ num }</p>
      <MyImage src={ AddIcon } onTouchEnd={ add }/>
    </div>
  );
};

export default MyStepper;
