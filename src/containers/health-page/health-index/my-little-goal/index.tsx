import React, { FC } from 'react';
import './index.less';
import MyTitle from '../../../../components/my-title';
import { MySmallYellowTag } from '../../../../components/my-tag';
import { MyImage } from '../../../../components/my-image';
import BgTarget from './image/bg_target@2x.png';

type MyLittleGoalProps = {};
const MyLittleGoal: FC<MyLittleGoalProps> = (props: MyLittleGoalProps) => {
  return (
    <div className="my-little-goal">
      <section className="my-little-goal-left">
        <MyTitle>我的小目标</MyTitle>
        <MySmallYellowTag>30天尽快瘦20斤</MySmallYellowTag>
      </section>
      <section className="my-little-goal-right">
        <MyImage src={ BgTarget } className="bg-target"/>
      </section>
    </div>
  );
};

export default MyLittleGoal;
