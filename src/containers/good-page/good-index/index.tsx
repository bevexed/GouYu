import React, { FC, useEffect, useState } from "react";
import "./index";
import GoodBanner from "../banner";
import { useParams } from "react-router";
import { AjaxGetOrdinaryGoodsInfo } from "../../../api/goods";
import { useSelector } from "react-redux";
import { ReducersProps } from "../../../redux/store";

type Props = typeof data;
const GoodPage: FC<Props> = (props: Props) => {
  const { id } = useParams();
  const userId = useSelector<ReducersProps, string>(
    state => state.userInfo.user.id
  );
  const [goodData, setGoodData] = useState<Props>(data);

  useEffect(() => {
    const getData = async () => {
      const res = await AjaxGetOrdinaryGoodsInfo({ id, userId });
      console.log(res);
      setGoodData(res.data)
    };
    getData();
  },[id]);
  return (
    <div className="_good-page">
      <GoodBanner bannerList={goodData.goodsDescribe?.split(',')} />
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