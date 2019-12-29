import { ActionProps } from '../store';
import { GET_HOME_PAGE_DATA } from "../action-types";

const initHonePageData = {
  integralGoodsList: [
    {
      createTime: 1577614269000,
      exchangeIntegral: 1000,
      goodsDescribe: 'xxx.png, xxx.png',
      goodsImage: 'xxx.png',
      goodsInfoImage: 'xxxxx.png',
      goodsName: 'iPhone11',
      goodsTitle: 'iPhone 11 128G 红色豪华版',
      id: 1,
      modifyTime: 1577614271000,
      productCode: 'sadasd213123',
      stock: 100,
    },
  ],
  bannerList: [
    {
      createTime: 1577601197000,
      id: 2,
      image: '1111.png',
      isProhibit: 0,
      modifyTime: 1577601199000,
      title: '新店开业',
      type: 0,
    },
  ],
  seckillActivityTimeSlotList: [
    {
      everydayEndTime: 1577581200000,
      everydayStartTime: 1577577600000,
      id: 1,
      isUp: 1,
      name: '8:00',
      status: 2,
      seckillActivityId: 1,
    },
  ],
  goodsList: [
    {
      createTime: 1577602033000,
      goldVipOneCommission: 15,
      goldVipTwoCommission: 8,
      goodsDescribe: '2.png,3.png',
      goodsImage: '1.png',
      goodsInfoImage: 'xxx.png',
      goodsName: '戴尔（DELL）灵越7590',
      goodsOneClassify: 7,
      goodsThreeClassify: 6,
      goodsTitle:
        '戴尔（DELL）灵越7590 燃7000酷睿九代15.6英寸轻薄高能合金本游戏设计手提笔记本电脑 i7-9750H GTX1650 4G独显 旗舰版 16G内存 1TB固态硬盘',
      goodsTwoClassify: 4,
      id: 2,
      isOverseas: 0,
      marketPrice: 9000,
      memberPrice: 8500,
      modifyTime: 1577602038000,
      productCode: 'xa213213',
      salePrice: 8779,
      seckillPrice: 0,
      shelf: 1,
      skuId: 2,
      stock: 10,
      storeId: 1,
      type: 0,
      vipOneCommission: 10,
      vipTwoCommission: 5,
      vipDisparityPrice:10
    },
  ],
  specialList: [
    {
      createTime: 1577601383000,
      icon: '3.png',
      id: 3,
      isDisplay: 1,
      modifyTime: 1577601385000,
      name: '品牌特卖',
      sort: 0,
    },
  ],
};

export type HomePageDataProps = typeof initHonePageData

export const homePageData = (
  state = initHonePageData,
  action: ActionProps,
) => {
  switch (action.type) {
    case GET_HOME_PAGE_DATA:
      return action.data
    default:
      return state
  }
};
