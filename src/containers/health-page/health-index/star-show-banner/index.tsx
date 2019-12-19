import React, { FC, useEffect } from 'react';
import './index.less';
import { WingBlank } from 'antd-mobile';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

type Props = {
  bannerList: any[];
};
const StarShowBanner: FC<Props> = (props: Props) => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      freeMode: true,
      slidesPerView: 2.3,
    });
  });
  return (
    <WingBlank className={ 'star-show-banner' }>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          { props.bannerList.map((val, index) => (
            <div className="swiper-slide" key={ index }>
              <img
                src={ `https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=334699929,3250564392&fm=26&gp=0.jpg` }
                alt=""
                className={ 'img' }
                onLoad={ () => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                } }
              />
            </div>
          )) }
        </div>
      </div>
    </WingBlank>
  );
};

export default StarShowBanner;
