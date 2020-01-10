import React, { FC, useEffect, useState } from 'react';
import './index.less';
import MyIcon from '../my-icon';
import IconImg from './image/btn_sellect_h@2x.png';
import IconImgNo from './image/btn_sellect_h_no@2x.png';

type Props = {
  onClick?:(a:any)=>any;
  onChange?: (a:any) => void;
  value?:boolean
};
const MyCheckBox: FC<Props> = (props: Props) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setCheck(props.value?props.value:false)
    return () => {
    };
  }, [props.value]);

  return (
    <div className="_my-check-box" onClick={e=>e.stopPropagation()}>
      <MyIcon
        src={ check ? IconImg : IconImgNo }
        onTouchEnd={ () => {
          if (props.onChange) {
            setCheck(!check);
            props.onChange(!check)
          }
        } }
      />
    </div>
  );
};

export default MyCheckBox;
