import React, { FC, useEffect } from 'react';
import './index.less'
import { WhiteSpace } from "antd-mobile";
import Swiper from "swiper";
import 'swiper/css/swiper.min.css';
import { iconPic } from "../../../config/image";
import { MyImage } from "../../../components/my-image";
import { useHistory } from "react-router";

type Props = {
  bannerList:string[]
};
const GoodBanner: FC<Props> = (props: Props) => {
  const {go} = useHistory()
  useEffect(() => {
    new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动,
      height:750
    });
  });
  return (
    <div className={ '_good-banner' }>
      <div className="swiper-container">
        <div className='bar'>
          <MyImage src={iconPic.more} className='back' onTouchEnd={()=>go(-1)}/>
          <MyImage src={iconPic.share_back_black} className='back' />
        </div>
        <div className="swiper-wrapper">
          { props.bannerList.map((val, index) => (
            <div className="swiper-slide" key={ index }>
              <MyImage
                src={ val }
                alt= {val}
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
      <WhiteSpace size={ "lg" }/>
    </div>
  );
};

export default GoodBanner
