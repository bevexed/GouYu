import React, { FC, useState } from 'react';
import './index.less';
import DietIcon from './image/ico_health_h@2x.png';
import { MyLabel } from '../../health-evaluate-first-page/label-width-ruler';

type DietItem = { label: string; color: string };
type Props = { dietList: DietItem[] };

const DietSelect: FC<Props> = (props: Props) => {
  const [diet, setDiet] = useState(-1);
  return (
    <div className={ 'diet-select' }>
      <MyLabel imgUrl={ DietIcon } label={ '饮食' }/>
      { props.dietList.map((item, key) => (
        <ul>
          <li
            className={ key === diet ? 'active' : '' }
            key={ key }
            onTouchEnd={ () => setDiet(key) }>
            <div
              className="circle"
              style={ { borderColor: key === diet ? '#fff' : item.color } }
            />
            <p
              className="label"
              style={ { color: key === diet ? '#fff' : '#262D2C' } }>
              { item.label }
            </p>
          </li>
        </ul>
      )) }
    </div>
  );
};

export default DietSelect;
