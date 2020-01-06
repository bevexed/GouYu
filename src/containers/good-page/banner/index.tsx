import React, { FC, useEffect, useState } from "react";
import "./index.less";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { iconPic } from "../../../config/image";
import { MyImage } from "../../../components/my-image";
import { useHistory } from "react-router";

type Props = {
  bannerList: string[];
};
const GoodBanner: FC<Props> = (props: Props) => {
  const { go } = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动,
      height: 750,
      on: {
        slideChangeTransitionEnd: function() {
          setActiveIndex(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
        }
      }
    });
  }, []);
  return (
    <div className={"_good-banner"}>
      <div className="swiper-container">
        <div className="bar">
          <MyImage
            src={iconPic.back_with_bk}
            className="back"
            onTouchEnd={() => go(-1)}
          />
          <MyImage src={iconPic.share_back_black} className="back" />
        </div>
        <div className="Pagination">
          {activeIndex + 1}/{props.bannerList.length}
        </div>
        <div className="swiper-wrapper">
          {props.bannerList.map((val, index) => (
            <div className="swiper-slide" key={index}>
              <MyImage
                src={val}
                alt={val}
                className={"img"}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoodBanner;
