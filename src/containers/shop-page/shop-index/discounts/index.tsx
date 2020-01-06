import React, { FC } from 'react';
import { Carousel } from 'antd-mobile';
import './index.less';
import { useHistory } from 'react-router';

type Props = {
  integralGoodsList:any[]
};
const Discounts: FC<Props> = (props: Props) => {

  const { push } = useHistory();

  return (
    <Carousel
      autoplay={true}
      infinite
      cellSpacing={10}
      slideWidth={1}
      dotStyle={{
        background: 'rgba(206,215,227,1)',
        width: '18px',
        height: '2px',
        borderRadius: 0,
      }}
      dotActiveStyle={{
        backgroundColor: 'rgba(56,85,120,1)',
        width: '18px',
        height: '2px',
        borderRadius: 0,
      }}
    >
      {props.integralGoodsList.map((val, key) => (
        <div
          className={'discounts-item'}
          key={key}
          onTouchEnd={() => push('health/vip-gift-bag-page')}
        >
          <img
            src={val.image}
            alt={val.title}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Discounts;
