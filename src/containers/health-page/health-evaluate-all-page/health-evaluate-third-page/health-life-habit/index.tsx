import React, { FC, useState } from 'react';
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
const HealthLifeHabit: FC<Props> = () => {
  const [selectedList, setSelectedList] = useState<number[]>([]);
  const handleSelect = (key: number) => {
    let arr = [...selectedList];

    if (selectedList.includes(key)) {
      arr.splice(
        selectedList.findIndex(item => item === key),
        1,
      );
    } else {
      arr.push(key);
    }
    setSelectedList(arr);
  };
  return (
    <div className="health-life-habit">
      { list.map((item, key) => (
        <HealthImgLabel
          { ...item }
          key={ key }
          onTouchEnd={ () => handleSelect(key) }
          isSelected={ selectedList.includes(key) }
        />
      )) }
    </div>
  );
};

export default HealthLifeHabit;
