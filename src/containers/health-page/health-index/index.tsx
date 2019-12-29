import React, { FC, useEffect, useState } from 'react';
import './index.less';
import MyPopUp from '../../../components/my-pop-up';
import HealthCoupons from './health-coupons';
import { MyTabBar } from '../../../components/my-tab-bar';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import HealthHeader from './health-header';
import HealthBar from './health-bar';
import HealthEvaluate from './health-evaluate';
import HealthEvaluated from './health-evaluated';
import Discounts from '../../shop-page/shop-index/discounts';
import MyWhiteBlank from '../../../components/my-white-blank';
import MyMore from '../../../components/my-more';
import StarShowBanner from './star-show-banner';
import Banner from './banner';
import MyTitle from '../../../components/my-title';
import { MyButton } from '../../../components/my-button';
import HealthGoal from './health-goal';
import HealthTask from './health-task';
import MyLittleGoal from './my-little-goal';
import HealthPeopleList from './health-people-list';
import { reqUserLogin } from '../../../redux/user/actions';
import { useDispatch } from 'react-redux';

type HealthIndexProps = {};
const HealthIndex: FC<HealthIndexProps> = (props: HealthIndexProps) => {
  const dispatch = useDispatch();
  const [tarBarState, setTabBarState] = useState(0);
  const [HealthCouponsState, setHealthCouponsState] = useState(false);
  useEffect(() => {
    dispatch(reqUserLogin({ code: '123', userMobile: '12345678911' }));
  });
  return (
    <div className="health-index">
      <WingBlank>
        <HealthHeader />
        <HealthBar
          getSelectedState={tarBarState => setTabBarState(tarBarState)}
        />
      </WingBlank>

      {/*状态*/}
      {tarBarState < 1 ? (
        <>
          <HealthEvaluate />
          <>
            <HealthEvaluated />
            <MyWhiteBlank backgroundColor={'#F8F9FA'} />
            <HealthGoal />
            <MyLittleGoal />
            <MyWhiteBlank backgroundColor={'#F8F9FA'} />
            <HealthTask />
            <MyWhiteBlank backgroundColor={'#F8F9FA'} />
          </>

          <WingBlank>
            <WhiteSpace size={'lg'} />
            <Discounts />
          </WingBlank>
          <MyWhiteBlank backgroundColor={'#F8F9FA'} />

          <MyMore
            path={'/shop/second-kill-page'}
            children={'健康达人SHOW'}
            rightContent={'去围观'}
          />
          <StarShowBanner bannerList={[1, 3, 4]} />
          <MyWhiteBlank backgroundColor={'#F8F9FA'} />

          <Banner title={<MyTitle>现金天天抽</MyTitle>} />
          <MyWhiteBlank backgroundColor={'#F8F9FA'} />

          <Banner title={<MyTitle>网红体验馆</MyTitle>} />

          <MyButton className={'open-health-btn'}>开启我的健康之旅</MyButton>
        </>
      ) : (
        <WingBlank style={{ background: '#F8F9FA' }}>
          <WhiteSpace />
          <HealthPeopleList />
        </WingBlank>
      )}

      <MyTabBar />

      <MyPopUp
        popUpShow={HealthCouponsState}
        setPopUpShow={setHealthCouponsState}
      >
        <HealthCoupons />
      </MyPopUp>
    </div>
  );
};

export default HealthIndex;
