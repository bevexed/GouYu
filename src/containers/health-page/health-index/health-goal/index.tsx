import React, { FC, useState } from 'react';
import './index.less';
import { Flex, WhiteSpace } from 'antd-mobile';
import MyTitle from '../../../../components/my-title';
import { MyGradientButton } from '../../../../components/my-button';
import MyPopUp from '../../../../components/my-pop-up';

type HealthGoalProps = {};
const HealthGoal: FC<HealthGoalProps> = (props: HealthGoalProps) => {
  const [goalPop, goalPopState] = useState(false);
  return (
    <>
      <div className="health-goal">
        <Flex>
          <MyTitle>定个小目标</MyTitle>
          <MyGradientButton>提交</MyGradientButton>
        </Flex>
        <div onTouchEnd={ () => goalPopState(true) } className="false-input">
          写下你的小目标，按计划完成
        </div>
      </div>

      <MyPopUp popUpShow={ goalPop } setPopUpShow={ () => goalPopState(false) }>
        <div className="health-goal-pop">
          <MyTitle>定个小目标</MyTitle>
          <textarea
            placeholder={ '写下你的小目标，按计划完成' }
            className="text-area"
          />
          <WhiteSpace size={ 'lg' }/>
          <input
            type="text"
            placeholder={ '请输入目标天数' }
            className={ 'input' }
          />
          <span className={ 'day' }>天</span>
          <WhiteSpace size={ 'lg' }/>
          <MyGradientButton children={ '提交' } className={ 'pop-button' }/>
        </div>
      </MyPopUp>
    </>
  );
};

export default HealthGoal;
