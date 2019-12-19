import React, { FC, useEffect } from 'react';
import './index.less';
import { MyBlueTag } from '../../../../components/my-tag';
import { WingBlank } from 'antd-mobile';
import PieCanvas from "../pie-canvas";

type HealthEvaluatedProps = {};
const HealthEvaluated: FC<HealthEvaluatedProps> = (
  props: HealthEvaluatedProps,
) => {
  useEffect(() => {

  });
  return (
    <WingBlank className={ 'health-evaluated' }>
      <div className="left">
        <MyBlueTag>早上好，范局态度</MyBlueTag>
        <MyBlueTag>
          根据健康系统智能评估，您的身体状况如下:(仅供参考)
        </MyBlueTag>
        <div className="bold-content">
          【影响容颜，内分泌失调风险，该控制体重了】
        </div>
        <MyBlueTag>完成任务得金币，参与抽奖哦~</MyBlueTag>
      </div>
      <div className="right">
        <PieCanvas/>
      </div>
    </WingBlank>
  );
};

export default HealthEvaluated;
