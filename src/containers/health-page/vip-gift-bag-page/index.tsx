import React, { FC } from 'react';
import './index.less';
import MyIcon from '../../../components/my-icon';
import { iconPic } from '../../../config/image';
import { useHistory } from 'react-router';
import ReactVideo from 'react-player';
import VipRightList from './vip-right-list';
import QRcode from './QR-code';
import { WhiteSpace } from 'antd-mobile';
import MyTitle from '../../../components/my-title';
import VipGoodList from "../../shop-page/hot-style-page/vip-good-list";

type Props = {};
const VipGiftBagPage: FC<Props> = (props: Props) => {
  const { go } = useHistory();
  return (
    <div className="vip-gift-bag-page">
      <section className="topic">
        <header>
          <MyIcon
            src={ iconPic.backBlack }
            white={ true }
            onTouchEnd={ () => go(-1) }
          />
          <span className="title">299VIP礼包</span>
          <MyIcon src={ iconPic.share } white={ true } onTouchEnd={ () => {
          } }/>
        </header>

        <ReactVideo
          light={
            'https://img.alicdn.com/simba/img/TB1zBLnb7xz61VjSZFtSuuDSVXa.jpg'
          }
          url="http://121.199.61.174/testhtml5.mp4"
          playing
          height={ 344 / 2 }
          width={ '100%' }
          className="video"
        />

        <VipRightList/>
      </section>
      <QRcode/>

      <WhiteSpace size={ 'lg' }/>
      <div className='vip-gift-bag-page-title'>
        <MyTitle>网红商品VIP免费领</MyTitle>
        <span>已有2346253人购买</span>
      </div>
      <VipGoodList vipGoodList={ [1, 2, 3, 4, 5] }/>


    </div>
  );
};

export default VipGiftBagPage;
