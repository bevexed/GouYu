import React, { FC } from 'react';
import './index.less';
import { Carousel, WingBlank } from 'antd-mobile';

type Props = {
  bannerList: any[];
};
const StarShowBanner: FC<Props> = (props: Props) => {
  return (
    <WingBlank className={ 'star-show-banner' }>
      <Carousel
        className="space-carousel"
        frameOverflow="hidden"
        dots={ false }
        cellSpacing={ 12 }
        slideWidth='141px'
        beforeChange={ (from, to) => console.log(`slide from ${ from } to ${ to }`) }>
        { props.bannerList.map((val, index) => (
          <img
            key={ index }
            src={ `https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=334699929,3250564392&fm=26&gp=0.jpg` }
            alt=""
            className={ 'img' }
            onLoad={ () => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
            } }
          />
        )) }
      </Carousel>
    </WingBlank>
  );
};

export default StarShowBanner;
