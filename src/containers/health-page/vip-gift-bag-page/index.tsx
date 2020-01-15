import React, { FC, useEffect, useState } from "react";
import "./index.less";
import MyIcon from "../../../components/my-icon";
import { iconPic } from "../../../config/image";
import { useHistory } from "react-router";
import ReactVideo from "react-player";
import VipRightList from "./vip-right-list";
import QRcode from "./QR-code";
import { WhiteSpace } from "antd-mobile";
import MyTitle from "../../../components/my-title";
import VipGoodList from "../../shop-page/hot-style-page/vip-good-list";
import { ajax } from "../../../api/ajax";
import { getLocalStorage } from "../../../util/storage";
import { isApp } from "../../../util/dsbridge";

type Props = {};
const VipGiftBagPage: FC<Props> = (props: Props) => {
  const { go } = useHistory();
  const [list, setList] = useState<any>([]);
  const soldOut = () =>
    list.reduce((pre: any, cur: any) => pre + cur.soldNumber, 0);
  useEffect(() => {
    ajax<any>({
      url: "goods/getVipGoodsPageList",
      method: "GET",
      data: {
        current: 1,
        size: 10000
      }
    }).then(res => setList(res.data.records));
  }, [go]);

  const [userInvitation, setUserInvitation] = useState('');
  useEffect(() => {
    let token;
    if (isApp()) {
      token = bridge.call("getToken");
    } else {
      token = getLocalStorage("token");
    }
    ajax<any>({
      url: "/user/getTokenUser",
      method: "POST",
      data: {
        token
      }
    }).then(res => {
      setUserInvitation(res.data?.userInvitation)
    });
  }, [go]);
  return (
    <div className="vip-gift-bag-page">
      <section className="topic">
        <header>
          <MyIcon
            src={iconPic.backBlack}
            white={true}
            onTouchEnd={() => go(-1)}
          />
          <span className="title">299VIP礼包</span>
          <MyIcon src={iconPic.share} white={true} onTouchEnd={() => {}} />
        </header>

        <ReactVideo
          light={
            "https://img.alicdn.com/simba/img/TB1zBLnb7xz61VjSZFtSuuDSVXa.jpg"
          }
          url="http://121.199.61.174/testhtml5.mp4"
          playing
          height={344 / 2}
          width={"100%"}
          className="video"
        />

        <VipRightList />
      </section>
      {userInvitation && <QRcode userInvitation={userInvitation}/>}

      <WhiteSpace size={"lg"} />
      <div className="vip-gift-bag-page-title">
        <MyTitle>网红商品VIP免费领</MyTitle>
        <span>已有{soldOut()}人购买</span>
      </div>
      <VipGoodList vipGoodList={list} />
    </div>
  );
};

export default VipGiftBagPage;
