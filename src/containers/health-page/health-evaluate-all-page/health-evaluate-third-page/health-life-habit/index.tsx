import React, { FC, useState } from 'react';
import './index.less';
import HealthImgLabel from '../../component/health-img-label';

const item = {
  label: '烟酒不沾',
  imgUrl: '',
}


type Props = {
  list: typeof item[],
};
const HealthLifeHabit: FC<Props> = (props) => {
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
      { props.list.map((item, key) => (
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
