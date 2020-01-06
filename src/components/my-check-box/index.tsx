import React, { FC, useState } from 'react';
import './index.less';
import MyIcon from '../my-icon';
import IconImg from './image/btn_sellect_h@2x.png';
import IconImgNo from './image/btn_sellect_h_no@2x.png';

type Props = {
  onChange: (state: boolean) => void;
  value?:boolean
};
const MyCheckBox: FC<Props> = (props: Props) => {
  const [check, setCheck] = useState(props.value);
  return (
    <div className="_my-check-box">
      <MyIcon
        src={ check ? IconImg : IconImgNo }
        onTouchEnd={ () => {
          setCheck(!check);
          props.onChange(!check);
        } }
      />
    </div>
  );
};

export default MyCheckBox;
