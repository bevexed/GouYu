import React, { FC } from 'react';
import { Carousel } from 'antd-mobile';
import './index.less';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ReducersProps } from '../../../../redux/store';
import { HomePageDataProps } from '../../../../redux/home-page/reducer';

type Props = {};
const Discounts: FC<Props> = (props: Props) => {
  const { integralGoodsList } = useSelector<ReducersProps, HomePageDataProps>(
    state => state.homePageData,
  );

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
      {integralGoodsList.map((val, key) => (
        <div
          className={'discounts-item'}
          key={key}
          onTouchEnd={() => push('health/vip-gift-bag-page')}
        >
          <img
            src={val.goodsImage}
            alt={val.goodsTitle}
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
