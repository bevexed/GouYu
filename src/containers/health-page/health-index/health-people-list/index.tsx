import React, { FC } from 'react';
import './index.less';
import HealthPeopleItem from './health-people-item';

type Props = {};
const HealthPeopleList: FC<Props> = (props: Props) => {
  return (
    <div className="health-people-list">
      { new Array(10).fill(1).map((item, key) => (
        <HealthPeopleItem isLike={ key % 3 === 1 } key={ key }/>
      )) }
    </div>
  );
};

export default HealthPeopleList;
