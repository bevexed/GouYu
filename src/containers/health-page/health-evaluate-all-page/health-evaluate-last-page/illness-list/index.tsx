import React, { FC, useState } from 'react';
import './index.less';
import { MySelectTag } from '../../../../../components/my-tag';

interface IllnessItemProps {
  label: string;
}

type Props = {
  illnessList: IllnessItemProps[];
};
const IllnessList: FC<Props> = (props: Props) => {
  const [selectedIllnessList, setSelectedIllnessList] = useState<number[]>([]);
  const handleSelect = (key: number) => {
    let arr = [...selectedIllnessList];

    if (selectedIllnessList.includes(key)) {
      arr.splice(
        selectedIllnessList.findIndex(item => item === key),
        1,
      );
    } else {
      arr.push(key);
    }
    setSelectedIllnessList(arr);
  };
  return (
    <div className="illness-list">
      { props.illnessList.map((item, key) => (
        <MySelectTag
          onTouchEnd={ () => handleSelect(key) }
          key={ key }
          isSelected={ selectedIllnessList.includes(key) }>
          { item.label }
        </MySelectTag>
      )) }
    </div>
  );
};

export default IllnessList;
