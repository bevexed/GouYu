import React, { FC, ReactNode } from 'react';
import './index.less';
import { Carousel, WingBlank } from 'antd-mobile';

type BannerProps = {
  title?: string | ReactNode;
};
const Banner: FC<BannerProps> = (props: BannerProps) => {
  return (
    <div className="_banner">
      <WingBlank>
        { props.title }
        <Carousel
          autoplay={ true }
          infinite
          dots={ false }
          beforeChange={ (from, to) => {
          }
          }
          afterChange={ index => {
          } }>
          { [1, 23, 4].map((val, key) => (
            <img
              key={ key }
              src={ `https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2849768792,1404089788&fm=26&gp=0.jpg` }
              alt=""
              className={ '_banner-img' }
              onLoad={ () => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              } }
            />
          )) }
        </Carousel>
      </WingBlank>
    </div>
  );
};

export default Banner;
