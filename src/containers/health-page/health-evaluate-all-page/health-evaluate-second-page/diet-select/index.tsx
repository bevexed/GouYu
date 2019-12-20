import React, { FC, useState } from 'react';
import './index.less';
import DietIcon from './image/ico_health_h@2x.png';
import { MyHealthLabel } from "../../component/health-label";

type DietItem = { label: string; color: string };
type Props = { dietList: DietItem[] };

const DietSelect: FC<Props> = (props: Props) => {
  const [diet, setDiet] = useState(-1);
  return (
    <div className='diet-select'>
      <MyHealthLabel imgUrl={ DietIcon } label={ '饮食' }/>
      <ul>
        { props.dietList.map((item, key) => (
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
        )) }
      </ul>
    </div>
  );
};

export default DietSelect;
