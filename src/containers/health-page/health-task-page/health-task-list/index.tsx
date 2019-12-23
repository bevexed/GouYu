import React, { FC } from 'react';
import './index.less';
import MyTitle from '../../../../components/my-title';
import HealthTaskItem from './haelth-task-item';

type HealthTaskListProps = {};
const HealthTaskList: FC<HealthTaskListProps> = (
  props: HealthTaskListProps,
) => {
  return (
    <div className="health-task-list">
      <MyTitle>我的任务</MyTitle>
      <div className="sub">打卡的任务越多，获得的奖励越丰盛</div>
      { new Array(5).fill(1).map((item, key) => (
        <HealthTaskItem key={ key }/>
      )) }
    </div>
  );
};

export default HealthTaskList;
