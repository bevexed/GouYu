import React, { FC, useEffect, useState } from 'react';
import { Carousel } from 'antd-mobile';
import './index.less';
import { useHistory } from "react-router";

type Props = {};
const Discounts: FC<Props> = (props: Props) => {
  const [state, setState] = useState(['1', '3', '2']);

  useEffect(() => setState(['1', '2', '3']), []);

  const { push } = useHistory();

  return (
    <Carousel
      autoplay={ true }
      infinite
      cellSpacing={ 10 }
      slideWidth={ 1 }
      dotStyle={ {
        background: 'rgba(206,215,227,1)',
        width: '18px',
        height: '2px',
        borderRadius: 0,
      } }
      dotActiveStyle={ {
        backgroundColor: 'rgba(56,85,120,1)',
        width: '18px',
        height: '2px',
        borderRadius: 0,
      } }
      // beforeChange={ (from, to) => console.log(`slide from ${ from } to ${ to }`) }
      // afterChange={ index => console.log(index) }
    >
      { state.map((val, key) => (
        <div className={ 'discounts-item' } key={ key } onTouchEnd={ () => push('health/vip-gift-bag-page') }>
          <img
            src={ require('./image/pic_banner@2x.png') }
            alt=""
            onLoad={ () => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
            } }
          />
        </div>
      )) }
    </Carousel>
  );
};

export default Discounts;
