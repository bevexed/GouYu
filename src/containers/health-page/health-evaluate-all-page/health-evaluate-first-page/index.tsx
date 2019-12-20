import React, { FC, useState } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import Steps from '../component/steps';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import MyTitle from '../../../../components/my-title';
import GenderSelect, { Gender } from './gender-select';
import LabelWithRuler, { Label } from './label-width-ruler';
import IconHeight from './image/ico_height_h@2x.png';
import IconWeight from './image/ico_weight_h@2x.png';
import MyWhiteBlank from '../../../../components/my-white-blank';
import { MyGradientButton } from '../../../../components/my-button';

type Props = {};
const HealthEvaluateFirstPage: FC<Props> = (props: Props) => {
  const [genderState, setGenderState] = useState(Gender.male);
  return (
    <div className="health-evaluate-first-page">
      <WingBlank className={ 'wrap' }>
        <MyNavBar/>
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

      <LabelWithRuler
        children={ <Label label={ '身高' } unit={ 'cm' } imgUrl={ IconHeight }/> }
      />

      <MyWhiteBlank height={ 104 }/>

      <LabelWithRuler
        children={ <Label label={ '体重' } unit={ 'kg' } imgUrl={ IconWeight }/> }
      />

      <MyGradientButton className={ 'next' }>下一步</MyGradientButton>
    </div>
  );
};

export default HealthEvaluateFirstPage;
