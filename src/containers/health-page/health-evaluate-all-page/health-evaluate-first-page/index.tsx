import React, { FC, useState } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import Steps from '../component/steps';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import MyTitle from '../../../../components/my-title';
import GenderSelect, { Gender } from './gender-select';
import LabelWithRuler, { MyLabel } from './label-width-ruler';
import IconHeight from './image/ico_height_h@2x.png';
import IconWeight from './image/ico_weight_h@2x.png';
import MyWhiteBlank from '../../../../components/my-white-blank';
import { MyGradientButton } from '../../../../components/my-button';
import { useHistory } from 'react-router';

type Props = {};
const HealthEvaluateFirstPage: FC<Props> = (props: Props) => {
  const [genderState, setGenderState] = useState(Gender.male);
  const { push } = useHistory();
  return (
    <div className="health-evaluate-first-page">
      <WingBlank>
        <MyNavBar/>

        <WingBlank>
          <Steps step={ 1 }/>
          <WhiteSpace size={ 'xl' }/>

          <MyTitle>
            <span className={ 'title' }>健康评估</span>
          </MyTitle>
          <WhiteSpace size={ 'xl' }/>

          <GenderSelect
            gender={ genderState }
            setGender={ () =>
              setGenderState(
                genderState === Gender.male ? Gender.female : Gender.male,
              )
            }
          />
        </WingBlank>
      </WingBlank>

      <LabelWithRuler
        children={ <MyLabel label={ '身高' } unit={ 'cm' } imgUrl={ IconHeight }/> }
      />

      <MyWhiteBlank height={ 104 }/>

      <LabelWithRuler
        children={ <MyLabel label={ '体重' } unit={ 'kg' } imgUrl={ IconWeight }/> }
      />

      <WingBlank>
        <WingBlank>
          <MyGradientButton
            onTouchEnd={ () => push('/health/health-evaluate-second-page') }
            className={ 'next' }>
            下一步
          </MyGradientButton>
        </WingBlank>
      </WingBlank>
    </div>
  );
};

export default HealthEvaluateFirstPage;
