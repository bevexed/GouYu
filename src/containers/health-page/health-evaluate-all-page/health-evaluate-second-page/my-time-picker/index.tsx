import React, { FC, useState } from 'react';
import './index.less';
import { PickerView } from 'antd-mobile';

const hours = new Array(24).fill('').map((item, index) => {
  item = index < 10 ? '0' + index : index + '';
  return { label: item, value: item };
});

const seconds = new Array(4).fill('').map((item, index) => {
  item = index * 15 + '';
  return { label: item, value: item };
});
type MyTimePickerProps = {
  hour: string;
  second: string;
};

const MyTimePicker: FC<MyTimePickerProps> = (props: MyTimePickerProps) => {
  const [hour, setHour] = useState<string[]>([props.hour]);
  const [second, setSecond] = useState<string[]>([props.second]);

  const onScrollChange = (value: []) => {
    console.log(value);
  };
  return (
    <div className="my-time-picker">
      <PickerView
        onChange={ setHour }
        onScrollChange={ onScrollChange }
        value={ hour }
        data={ hours }
        cascade={ false }
        prefixCls={ 'prefixCls' }
      />
      <div className="am-picker-col-item-selected mr">：</div>
      <PickerView
        onChange={ setSecond }
        onScrollChange={ onScrollChange }
        value={ second }
        data={ seconds }
        cascade={ false }
        prefixCls={ 'prefixCls' }
      />
    </div>
  );
};

export default MyTimePicker;
