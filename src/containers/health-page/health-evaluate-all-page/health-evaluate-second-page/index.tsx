import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import Steps from '../component/steps';
import MyTitle from '../../../../components/my-title';
import { MyGradientButton } from '../../../../components/my-button';
import { useHistory } from 'react-router';
import LabelWidthTimePicker from './label-width-time-picker';
import WakeUpIcon from './image/ico_wakeup_h@2x.png';
import SleepIcon from './image/ico_sleep_h@2x.png';
import DietSelect from './diet-select';

const dietList = [
  { label: '清淡', color: '#21A3CD' },
  { label: '一般', color: '#FFC327' },
  { label: '重口', color: '#E92B2C' },
];

type Props = {};
const HealthEvaluateSecondPage: FC<Props> = (props: Props) => {
  const { push } = useHistory();
  return (
    <div
      className="health-evaluate-second-page"
      onTouchStart={ e => {
        e.stopPropagation();
        e.preventDefault();
      } }
      onTouchMove={ e => {
        e.stopPropagation();
        e.preventDefault();
      } }>
      <WingBlank>
        <MyNavBar/>

        <WingBlank>
          <Steps step={ 2 }/>
          <WhiteSpace size={ 'xl' }/>

          <MyTitle>
            <span className={ 'title' }>健康评估</span>
          </MyTitle>
          <WhiteSpace size={ 'xl' }/>
        </WingBlank>
      </WingBlank>

      <LabelWidthTimePicker
        imgUrl={ WakeUpIcon }
        label={ '醒来' }
        hour={ '07' }
        second={ '30' }
      />
      <WhiteSpace size={ 'xl' }/>
      <LabelWidthTimePicker
        imgUrl={ SleepIcon }
        label={ '入睡' }
        hour={ '23' }
        second={ '30' }
      />

      <WhiteSpace size={ 'xl' }/>
      <WhiteSpace size={ 'xl' }/>

      <WingBlank>
        <WingBlank>
          <DietSelect dietList={ dietList }/>

          <MyGradientButton
            onTouchEnd={ () => push('/health/health-evaluate-third-page') }
            className={ 'next' }>
            下一步
          </MyGradientButton>
        </WingBlank>
      </WingBlank>
    </div>
  );
};

export default HealthEvaluateSecondPage;
