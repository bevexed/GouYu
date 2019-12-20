import React, { FC } from 'react';
import './index.less';
import HardIcon from './image/ico_harddrink@2x.png';
import DrinkIcon from './image/ico_drink_h@2x.png';
import HealthImgLabel from '../../component/health-img-label';

const list = [
  {
    label: '烟酒不沾',
    imgUrl: HardIcon,
  },
  {
    label: '适量饮酒',
    imgUrl: DrinkIcon,
  },
  {
    label: '烟酒不离',
    imgUrl: HardIcon,
  },
];

type Props = {};
const HealthLifeHabit: FC<Props> = (props: Props) => {
  return (
    <div className="health-life-habit">
      { list.map((item, key) => (
        <HealthImgLabel { ...item } key={ key }/>
      )) }
    </div>
  );
};

export default HealthLifeHabit;
