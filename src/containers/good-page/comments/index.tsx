import React, { FC } from "react";
import "./index.less";
import { MyImage } from "../../../components/my-image";
import { WingBlank } from "antd-mobile";
import { BlackLabel, BlueLabel } from "../../../components/price";
import Heart from "../../search-page/search-result-page/shop-item/image/xin.png";
import { iconPic } from "../../../config/image";

type Props = {};
const Comment: FC<Props> = (props: Props) => {
  return (
    <>
      <WingBlank className="_comment">
        <header>
          <MyImage src={""} />
          <div className={"right"}>
            <BlackLabel>xxxxxx</BlackLabel>
            <div className="shop-level">
              {new Array(5).fill(1).map((item, key) => (
                <img
                  src={Heart}
                  alt=""
                  className={key > 2 ? "gray" : ""}
                  key={key}
                />
              ))}
            </div>
          </div>
        </header>

        <article>
          健身教学：连续22天的腹肌训练，很多女生去健身房除了用跑步机，对其他器械动作一头雾水，也完全没有计划目的性的去健身房。
        </article>

        <div className="_comment-pic">
          {new Array(3).fill(1).map((item, key) => (
            <MyImage src={""} key={key} />
          ))}{" "}
        </div>
      </WingBlank>
      <div className="_comment-more">
        <BlueLabel>查看更多评价</BlueLabel>
        <MyImage src={iconPic.blue_down_arrow} />
      </div>
    </>
  );
};

export default Comment;
