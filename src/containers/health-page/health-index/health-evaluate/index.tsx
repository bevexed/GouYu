import React, { FC } from 'react';
import './index.less';
import { MyBlueTag, MySmallGrayTag } from '../../../../components/my-tag';
import { MyImage } from '../../../../components/my-image';
import { iconPic } from '../../../../config/image';
import RightPic from './image/right.gif';
import { MyButton } from '../../../../components/my-button';
import { useHistory } from "react-router";

type HealthEvaluateProps = {};
const HealthEvaluate: FC<HealthEvaluateProps> = (
  props: HealthEvaluateProps,
) => {
  const { push } = useHistory();
  return (
    <div className="health-evaluate">
      <div className="left">
        <MyBlueTag>99999 + 已获取</MyBlueTag>

        <div className="title">私人定制健康计划</div>

        <div className="tags">
          { new Array(4).fill(1).map((item, key) => (
            <MySmallGrayTag key={ key }>减肥</MySmallGrayTag>
          )) }
        </div>

        <footer>
          <span className="yellow">狗鱼健康</span>
          <span className="gray">分享健康生活每一天</span>
          <MyImage src={ iconPic.more } className="more"/>
        </footer>
      </div>
      <div className="right">
        <MyImage src={ RightPic } className="right-pic"/>
        <MyButton className={ 'test-btn' } onTouchEnd={ () => push('/health/health-evaluate-first-page') }>
          <span>开始健康评估</span>
        </MyButton>
      </div>
    </div>
  );
};

export default HealthEvaluate;
