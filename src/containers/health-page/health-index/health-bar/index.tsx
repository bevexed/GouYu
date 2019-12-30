import React, { FC, useState } from 'react';
import './index.less';
import { MyImage } from '../../../../components/my-image';
import { iconPic } from '../../../../config/image';
import { WhiteSpace } from 'antd-mobile';

type HealthBarProps = {
  getSelectedState: (selected: number) => void;
};
const barList = [
  { label: '状态' },
  { label: '健康达人' },
  { label: '减肥' },
  { label: '两性' },
  { label: '三高' },
  { label: '失眠' },
  { label: '失眠' },
];
const HealthBar: FC<HealthBarProps> = (props: HealthBarProps) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="health-bar">
      <ul>
        { barList.map((item, key) => (
          <li
            key={ key }
            onTouchEnd={ () => {
              setSelected(key);
              props.getSelectedState(key);
            } }
            className={ (selected === key && 'active').toString() }>
            { item.label }
            { selected === key && (
              <MyImage src={ iconPic.triangle } className={ 'triangle' }/>
            ) }
          </li>
        )) }
      </ul>
      <WhiteSpace/>
    </div>
  );
};
 
export default HealthBar;
