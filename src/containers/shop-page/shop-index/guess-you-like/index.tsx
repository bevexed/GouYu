import React, { FC } from "react";
import { WingBlank } from "antd-mobile";
import "./index.less";
import MyTag from "../../../../components/my-tag";
import { VipPrice } from "../../../../components/price";
import { useHistory } from "react-router";
import { MyImage } from "../../../../components/my-image";

const GuessYouLikeItem: FC<GuessYouLikeItemProps> = (
  props: GuessYouLikeItemProps
) => {
  const { push } = useHistory();
  return (
    <div
      className="guess-you-like-item"
      onTouchEnd={() => push("/good-page/" + props.id)}
    >
      <MyImage className="guess-you-like-item-img" src={props.goodsImage} />
      <section className="bottom">
        <div className="guess-you-like-item-title">{props.goodsName}</div>

        <div className="guess-you-like-item-dis">{props.goodsTitle} </div>

        <div className="guess-you-like-item-price">
          <div className="guess-you-like-item-real">￥{props.seckillPrice}</div>
          <div className="guess-you-like-item-ori">￥{props.salePrice}</div>
        </div>

        <div className="tags">
          <MyTag>VIP省￥{props.vipDisparityPrice}</MyTag>
          <MyTag>分享赚￥2.99</MyTag>
        </div>

        <div className="vip-price">
          <VipPrice>666</VipPrice>
          <div className="sold-out">已售999＋</div>
        </div>
      </section>
    </div>
  );
};

type GuessYouLikeItemProps = typeof _item;

type GuessYouLikeListProps = {
  guessYouLikeList: GuessYouLikeItemProps[];
};
const GuessYouLikeList: FC<GuessYouLikeListProps> = (
  props: GuessYouLikeListProps
) => {
  return (
    <div className="guess-you-like">
      <WingBlank>
        <section className="list">
          {props.guessYouLikeList.map((item, index) => (
            <GuessYouLikeItem key={index} {...item} />
          ))}
        </section>
      </WingBlank>
    </div>
  );
};

export default GuessYouLikeList;
const _item = {
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
  marketPrice: 9000,
  memberPrice: 8500,
  modifyTime: 1577602038000,
  productCode: "xa213213",
  salePrice: 8779,
  seckillPrice: 0,
  shelf: 1,
  skuId: 2,
  stock: 10,
  storeId: 1,
  type: 0,
  vipOneCommission: 10,
  vipTwoCommission: 5,
  vipDisparityPrice: 10
};
