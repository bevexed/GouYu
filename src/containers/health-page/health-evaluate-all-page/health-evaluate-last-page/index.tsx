import React, { FC } from 'react';
import './index.less';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { MyNavBar } from '../../../../components/my-nav-bar';
import Steps from '../component/steps';
import MyTitle from '../../../../components/my-title';
import { MyHealthLabel } from '../component/health-label';
import IconHealth from './image/ico_healthy_h@2x.png';
import IconSick from './image/ico_sick_h@2x.png';
import IconCnc from './image/ico_cnc_n@2x.png';
import IconNoMind from './image/ico_notmind_n@2x.png';
import IconRelax from './image/ico_relax_n@2x.png';
import HealthLifeHabit from '../health-evaluate-third-page/health-life-habit';
import { MyGradientButton } from '../../../../components/my-button';
import { useHistory } from 'react-router';

const list = [
  { label: '服用保健品', imgUrl: IconCnc },
  { label: '放松心情', imgUrl: IconRelax },
  { label: '漠不关心', imgUrl: IconNoMind },
];

type Props = {};
const HealthEvaluateLastPage: FC<Props> = (props: Props) => {
  const { push } = useHistory();
  return (
    <div className="health-evaluate-last-page">
      <WingBlank>
        <MyNavBar/>

        <WingBlank>
          <Steps step={ 4 }/>
          <WhiteSpace size={ 'xl' }/>

          <MyTitle>
            <span className={ 'title' }>健康评估</span>
          </MyTitle>
          <WhiteSpace size={ 'xl' }/>

          <MyHealthLabel imgUrl={ IconSick } label={ '慢性疾病及亚健康' }/>

          <WhiteSpace size={ 'xl' }/>

          <MyHealthLabel imgUrl={ IconHealth } label={ '健康意识' }/>
          <HealthLifeHabit list={ list }/>
        </WingBlank>
      </WingBlank>

      <WingBlank>
        <WingBlank>
          <MyGradientButton
            onTouchEnd={ () => push('/health/health-evaluate-second-page') }
            className={ 'next' }>
            生成报告
          </MyGradientButton>
        </WingBlank>
      </WingBlank>
    </div>
  );
};

export default HealthEvaluateLastPage;
