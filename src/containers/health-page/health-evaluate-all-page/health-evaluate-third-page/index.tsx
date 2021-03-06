import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import Steps from '../component/steps';
import MyTitle from '../../../../components/my-title';
import { MyGradientButton } from '../../../../components/my-button';
import { useHistory } from 'react-router';
import { MyHealthLabel } from '../component/health-label';
import IconSport from './image/ico_sport_h@2x.png';
import IconLife from './image/ico_life_h@2x.png';
import HealthSportList from './health-sport-list';
import HealthLifeHabit from "./health-life-habit";
import NoDrinkIcon from "./health-life-habit/image/ico_nodrink_h@2x.png";
import HardIcon from "./health-life-habit/image/ico_harddrink@2x.png";
import DrinkIcon from "./health-life-habit/image/ico_drink_h@2x.png";

const list = [
  {
    label: '烟酒不沾',
    imgUrl: NoDrinkIcon,
  },
  {
    label: '适量饮酒',
    imgUrl: DrinkIcon,
  },
  {
    label: '烟酒不离',
    imgUrl: HardIcon,
  },
];


type Props = {};
const HealthEvaluateSecondPage: FC<Props> = (props: Props) => {
  const { push } = useHistory();
  return (
    <div className="health-evaluate-third-page">
      <WingBlank>
        <MyNavBar/>

        <WingBlank>
          <Steps step={ 3 }/>
          <WhiteSpace size={ 'xl' }/>

          <MyTitle>
            <span className={ 'title' }>健康评估</span>
          </MyTitle>
          <WhiteSpace size={ 'xl' }/>

          <MyHealthLabel imgUrl={ IconSport } label={ '运动情况' }/>

          <HealthSportList/>
          <WhiteSpace size={ 'xl' }/>

          <MyHealthLabel imgUrl={ IconLife } label={ '生活习惯' }/>
          <HealthLifeHabit list={ list }/>
        </WingBlank>
      </WingBlank>

      <WingBlank>
        <WingBlank>
          <MyGradientButton
            onTouchEnd={ () => push('/health/health-evaluate-last-page') }
            className={ 'next' }>
            下一步
          </MyGradientButton>
        </WingBlank>
      </WingBlank>
    </div>
  );
};

export default HealthEvaluateSecondPage;
