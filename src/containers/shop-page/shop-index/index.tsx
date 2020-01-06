import React, { FC, useEffect, useState } from "react";
import { History } from "history";
import { WhiteSpace, WingBlank } from "antd-mobile";
import { iconPic } from "../../../config/image";
import "./index.less";
import Banner from "./banner";
import Catalogue from "./catalogue";
import Discounts from "./discounts";
import MyWhiteBlank from "../../../components/my-white-blank";
import { MyTabBar } from "../../../components/my-tab-bar";
import Seckill, { RenderContent } from "../components/seckill";
import { GoodList } from "../components/good-list";
import VipGoodList from "./vip-good-list";
import GuessYouLikeList from "./guess-you-like";
import FloatButton from "./float-button";
import MyMore from "../../../components/my-more";
import { useDispatch, useSelector } from "react-redux";
import { reqHomePageData } from "../../../redux/home-page/actions";
import { useHistory } from "react-router";
import { ReducersProps } from "../../../redux/store";
import { HomePageDataProps } from "../../../redux/home-page/reducer";
import { ajax } from "../../../api/ajax";
import { MyCenterTitle } from "../../../components/my-title";

interface Props {
  history: History;
}
type State = {};

const ShopIndex: FC<Props> = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reqHomePageData());
  }, [dispatch]);

  const {
    goodsList,
    integralGoodsList,
    seckillActivityTimeSlotList,
    bannerList,
    specialList,
    vipBannerList
  } = useSelector<ReducersProps, HomePageDataProps>(
    state => state.homePageData
  );

  const [records, setRecords] = useState<any[]>([]);
  const [seckillActivityTimeSlotId, setSeckillActivityTimeSlotId] = useState(0);
  const [seckillActivityId, setSeckillActivityId] = useState(0);
  useEffect(() => {
    ajax<any>({
      method: "GET",
      url: "/goods/getHomeSeckillGoodsList",
      data: {
        seckillActivityTimeSlotId:
          seckillActivityTimeSlotId || seckillActivityTimeSlotList[0].id
      }
    }).then(res => {
      setRecords(res.data.records);
    });
  }, [
    seckillActivityTimeSlotId,
    seckillActivityTimeSlotList,
  ]);

  const { push } = useHistory();
  return (
    <div className="shop-index">
      <WingBlank>
        <div className="search">
          <img src={iconPic.search} alt="" />
          <input
            type="text"
            placeholder={"居家必备瑜伽垫"}
            onFocus={() => push("/search-page")}
          />
        </div>

        <Banner bannerList={bannerList} />

        <WhiteSpace size={"lg"} />

        <Catalogue specialList={specialList} />

        <WhiteSpace size={"md"} />

        <Discounts integralGoodsList={vipBannerList} />
      </WingBlank>

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      <MyMore
        path={"/shop/second-kill-page/" + (seckillActivityId || seckillActivityTimeSlotList[0].seckillActivityId)}
        children={"限时秒杀"}
      />
      <Seckill
        tabs={seckillActivityTimeSlotList}
        getChange={a => {
          setSeckillActivityId(a.seckillActivityId);
          setSeckillActivityTimeSlotId(a.id);
        }}
      >
        <>
          <RenderContent />
          <MyWhiteBlank backgroundColor={"#F8F9FA"} />
          <GoodList goodList={records} />
        </>
      </Seckill>

      <MyMore
        path={"/shop/web-celebrity-goods-page"}
        children={"网红商品VIP免费领"}
      />
      <VipGoodList vipGoodList={integralGoodsList} />

      <MyCenterTitle>猜你喜欢</MyCenterTitle>

      <GuessYouLikeList guessYouLikeList={goodsList} />

      <FloatButton />

      <MyTabBar />

      <MyWhiteBlank height={100} />
    </div>
  );
};

export default ShopIndex;
