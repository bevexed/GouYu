import React, { FC, TouchEventHandler } from 'react';
import './index.less';
import { MyImage } from '../../../../../components/my-image';
import IconMale from './image/ico_male_h@2x.png'
import IconFemale from './image/ico_female_h@2x.png'

export enum Gender {
  'male',
  'female',
}

type GenderProps = {
  gender: number;
  setGender: TouchEventHandler;
};
const GenderSelect: FC<GenderProps> = (props: GenderProps) => {
  return (
    <div className="gender-select" onTouchEnd={ props.setGender }>
      <div
        className={ ['btn-select', props.gender !== Gender.male && 'gray'].join(
          ' ',
        ) }>
        <MyImage src={ IconMale } className={ 'icon' }/>
        <p className={ 'label' }>男</p>
      </div>

      <div
        className={ [
          'btn-select',
          props.gender !== Gender.female && 'gray',
        ].join(' ') }>
        <MyImage src={ IconFemale } className={ 'icon' }/>
        <p className='label'>女</p>
      </div>
    </div>
  );
};

export default GenderSelect;
