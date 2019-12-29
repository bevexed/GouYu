import React, { FC, useEffect } from 'react';
import { History } from 'history';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { iconPic } from '../../../config/image';
import './index.less';
import Banner from './banner';
import Catalogue from './catalogue';
import Discounts from './discounts';
import MyWhiteBlank from '../../../components/my-white-blank';
import { MyTabBar } from '../../../components/my-tab-bar';
import Seckill from '../components/seckill';
import { GoodList } from '../components/good-list';
import VipGoodList from './vip-good-list';
import GuessYouLikeList from './guess-you-like';
import FloatButton from './float-button';
import MyMore from '../../../components/my-more';
import { useDispatch, useSelector } from 'react-redux';
import { reqHomePageData } from '../../../redux/home-page/actions';
import { useHistory } from 'react-router';
import { ReducersProps } from '../../../redux/store';
import { HomePageDataProps } from '../../../redux/home-page/reducer';

interface Props {
  history: History;
}
type State = {};

const ShopIndex: FC<Props> = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reqHomePageData());
  }, [dispatch]);
  const { goodsList, integralGoodsList } = useSelector<
    ReducersProps,
    HomePageDataProps
  >(state => state.homePageData);
  const { push } = useHistory();
  return (
    <div className="shop-index">
      <WingBlank>
        <div className="search">
          <img src={iconPic.search} alt="" />
          <input
            type="text"
            placeholder={'居家必备瑜伽垫'}
            onFocus={() => push('/search-page')}
          />
        </div>

        <Banner />

        <WhiteSpace size={'lg'} />

        <Catalogue />

        <WhiteSpace size={'md'} />

        <Discounts />
      </WingBlank>

      <MyWhiteBlank backgroundColor={'#F8F9FA'} />

      <MyMore path={'/shop/second-kill-page'} children={'限时秒杀'} />
      <Seckill
        tabs={[
          { title: '08:00', state: 0 },
          { title: '10:00', state: 1 },
          { title: '12:00', state: 1 },
          { title: '14:00', state: 1 },
          { title: '16:00', state: 1 },
          { title: '18:00', state: 1 },
          { title: '20:00', state: 1 },
        ]}
      />

      <MyWhiteBlank backgroundColor={'#F8F9FA'} />

      <GoodList goodList={goodsList} />

      <MyMore
        path={'/shop/web-celebrity-goods-page'}
        children={'网红商品VIP免费领'}
      />
      <VipGoodList vipGoodList={integralGoodsList} />

      <div className="title">猜你喜欢</div>

      <GuessYouLikeList guessYouLikeList={goodsList} />

      <FloatButton />

      <MyTabBar />

      <MyWhiteBlank height={100} />
    </div>
  );
};

export default ShopIndex;
