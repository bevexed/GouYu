import React, { FC, useState } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import Steps from '../component/steps';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import MyTitle from '../../../../components/my-title';
import GenderSelect, { Gender } from './gender-select';

type Props = {};
const HealthEvaluateFirstPage: FC<Props> = (props: Props) => {
  const [genderState, setGenderState] = useState(Gender.male);
  console.log(genderState);
  return (
    <div className="health-evaluate-first-page">
      <WingBlank className={ 'wrap' }>
        <MyNavBar/>
        <Steps step={ 1 }/>
        <WhiteSpace size={ 'xl' }/>

        <MyTitle>健康评估</MyTitle>
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
    </div>
  );
};

export default HealthEvaluateFirstPage;
