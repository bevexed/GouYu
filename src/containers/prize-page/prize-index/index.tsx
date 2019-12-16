import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import BgLottery from './image/bg_lottery@2x.png';
import LotteryButton from './image/btn@2x.png';
import { MyImage } from '../../../components/my-image';
import { iconPic } from "../../../config/image";

type PrizeIndexProps = {};
const PrizeIndex: FC<PrizeIndexProps> = (props: PrizeIndexProps) => {
  return (
    <div
      className="prize-index"
      style={ { backgroundImage: `url(${ BgLottery })` } }>
      <MyNavBar rightContent={ <MyImage className='ico-share' src={ iconPic.share }/> }>幸运大抽奖</MyNavBar>
      <MyImage src={ LotteryButton } className='lottery-button'/>
    </div>
  );
};

export default PrizeIndex;
