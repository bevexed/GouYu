import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../../../components/my-image';
import IMG from './image/ico_health_h copy@2x.png';
import { MyGradientButton } from '../../../../../components/my-button';

type HealthTaskItemProps = {};
const HealthTaskItem: FC<HealthTaskItemProps> = (
  props: HealthTaskItemProps,
) => {
  return (
    <div className="health-task-item">
      <div className="health-task-item-icon-wrap">
        <MyImage src={ IMG } className="health-task-item-icon"/>
      </div>

      <section className="content">
        <div className="left">
          <div className="title">清淡饮食 ></div>
          <div className="describe">
            吃饭七分饱，清淡饮食，每日打卡 即可获得500积分
          </div>
        </div>
        <div className="right">
          <MyGradientButton className="card-btn">今日打卡</MyGradientButton>
          <section className="bottom">
            <div className="progress-wrap">
              <div className="current-progress"/>
            </div>
            <div className='data'>
              60/88天
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default HealthTaskItem;
