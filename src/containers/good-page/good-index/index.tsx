import React, { FC, useEffect, useState } from "react";
import "./index.less";
import GoodBanner from "../components/banner";
import { useParams } from "react-router";
import { AjaxGetOrdinaryGoodsInfo } from "../../../api/goods";
import { useSelector } from "react-redux";
import { ReducersProps } from "../../../redux/store";
import MyTitle, { MyCenterTitle } from "../../../components/my-title";
import { WingBlank } from "antd-mobile";
import { GrayLabel, OriginPrice, Price, VipPrice } from "../../../components/price";
import MyTag from "../../../components/my-tag";
import MyWhiteBlank from "../../../components/my-white-blank";
import MyMore from "../../../components/my-more";
import Comment from "../components/comments";
import Shop from "../components/shop";
import GuessYouLikeList from "../../shop-page/shop-index/guess-you-like";
import GoodBottom from "../components/good-bottom";
import Specification from "../components/specification";

type Props = typeof data;
const GoodPage: FC<Props> = (props: Props) => {
  const { id } = useParams();

  const userId = useSelector<ReducersProps, string>(
    state => state.userInfo.user.id
  );
  const [goodData, setGoodData] = useState<Props>(data);

  // 获取商品详情
  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const res = await AjaxGetOrdinaryGoodsInfo({ id, userId });
      setGoodData(res.data);
    };
    getData();
  }, [id]);

  const [open, setOpen] = useState(false);

  return (
    <div className="_good-page">
      <GoodBanner bannerList={goodData.goodsDescribe?.split(",")} />

      <WingBlank>
        <MyTitle>{goodData.goodsName}</MyTitle>
        <GrayLabel ellipsis={true}>{goodData.goodsTitle}</GrayLabel>

        <div className={"price"}>
          <OriginPrice>{goodData.marketPrice}</OriginPrice>
          <Price>{goodData.salePrice}</Price>
          <VipPrice>{goodData.memberPrice}</VipPrice>
          <GrayLabel ellipsis={true}>已售{goodData.soldNumber}件</GrayLabel>
        </div>

        <div className="tag">
          <MyTag>VIP省￥ {goodData.vipDisparityPrice}</MyTag>
          <MyTag>分享赚￥ {goodData.goldVipOneCommission}</MyTag>
          <div />
          <div className="tag-btn">成为VIP分享拿佣金</div>
        </div>
        <MyWhiteBlank />
      </WingBlank>
      <MyWhiteBlank backgroundColor={"#F8F9FA"} />
      <MyMore path={() => setOpen(true)} children={"选择规格和数量"} />
      <div className="_back">
        <GrayLabel>·天无理由退货·闪电退货</GrayLabel>
      </div>

      <Comment id={id} />

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />

      {/*//todo: shop接口*/}
      {goodData.storeId !== 0 && <Shop />}

      <MyWhiteBlank backgroundColor={"#F8F9FA"} />
      <MyCenterTitle>猜你喜欢</MyCenterTitle>

      <GuessYouLikeList />

      <GoodBottom />

      {/*//todo: sku*/}
      <Specification open={open} id={id} close={() => setOpen(false)} />
    </div>
  );
};

export default GoodPage;

const data = {
  createTime: 1577602033000,
  goldVipOneCommission: 15,
  goldVipTwoCommission: 8,
  goodsDescribe: "2.png,3.png",
  goodsImage: "1.png",
  goodsInfoImage: "xxx.png",
  goodsName: "戴尔（DELL）灵越7590",
  goodsOneClassify: 7,
  goodsThreeClassify: 6,
  goodsTitle:
    "戴尔（DELL）灵越7590 燃7000酷睿九代15.6英寸轻薄高能合金本游戏设计手提笔记本电脑 i7-9750H GTX1650 4G独显 旗舰版 16G内存 1TB固态硬盘",
  goodsTwoClassify: 4,
  id: 2,
  isOverseas: 0,
  isVip: 0,
  marketPrice: 9000,
  memberPrice: 8500,
  modifyTime: 1577602038000,
  oneAttributeValue: "i7-9750H GXT1650 4G",
  productCode: "xa213213",
  salePrice: 8779,
  seckillPrice: 0,
  shelf: 1,
  skuId: 2,
  soldNumber: 0,
  sort: 0,
  stock: 10,
  storeId: 1,
  twoAttributeValue: "热卖版 8G内存",
  type: 0,
  vipDisparityPrice: 279,
  vipOneCommission: 10,
  vipTwoCommission: 5
};
