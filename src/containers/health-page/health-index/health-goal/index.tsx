import React, { FC } from 'react';
import './index.less';
import { Flex } from 'antd-mobile';
import MyTitle from '../../../../components/my-title';
import { MyGradientButton } from '../../../../components/my-button';

type HealthGoalProps = {};
const HealthGoal: FC<HealthGoalProps> = (props: HealthGoalProps) => {
  return (
    <div className="health-goal">
      <Flex>
        <MyTitle>定个小目标</MyTitle>
        <MyGradientButton>提交</MyGradientButton>
      </Flex>
      <div className="false-input">写下你的小目标，按计划完成</div>
    </div>
  );
};

export default HealthGoal;
