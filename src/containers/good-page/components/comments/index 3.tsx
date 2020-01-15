import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { MyImage } from "../../../../components/my-image";
import { WingBlank } from "antd-mobile";
import { BlackLabel, BlueLabel, GrayLabel } from "../../../../components/price";
import Heart from "../../../search-page/search-result-page/shop-item/image/xin.png";
import { iconPic } from "../../../../config/image";
import { ajax } from "../../../../api/ajax";
import MyTitle from "../../../../components/my-title";
import MyIcon from "../../../../components/my-icon";

type Props = {
  [key: string]: any;
};
const Comment: FC<Props> = (props: Props) => {
  const [commentList, setCommentList] = useState<any>([]);
  // 获取评价详情
  const { id } = props;
  useEffect(() => {
    ajax<any>({
      url: "/comment/commentList",
      method: "GET",
      data: { id, current: 1, size: 10000 }
    }).then(res => setCommentList(res.data.records));
  }, [id]);
  return (
    <>
      {commentList.length > 0 && (
        <WingBlank className="dis">
          <MyTitle>商品评价</MyTitle>
          <GrayLabel>（{commentList.length}评价）</GrayLabel>
          <BlueLabel>查看更多</BlueLabel>
          <MyIcon src={iconPic.blue_more} />
        </WingBlank>
      )}
      {commentList.map((item: any, key: number) => (
        <WingBlank className="_comment" key={key}>
          <header>
            <MyImage src={props.headImage} />
            <div className={"right"}>
              <BlackLabel>{props.nickName}</BlackLabel>
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
            {props.pics.split(",").map((item: any, key: number) => (
              <MyImage src={item} key={key} />
            ))}{" "}
          </div>
        </WingBlank>
      ))}
      {commentList.length > 0 && (
        <div className="_comment-more">
          <BlueLabel>查看更多评价</BlueLabel>
          <MyImage src={iconPic.blue_down_arrow} />
        </div>
      )}
    </>
  );
};

export default Comment;
