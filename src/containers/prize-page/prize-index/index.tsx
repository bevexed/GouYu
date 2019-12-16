import React, { FC, useState } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import BgLottery from './image/bg_lottery@2x.png';
import LotteryButton from './image/btn@2x.png';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import PopUp from './pop-up';

type PrizeIndexProps = {};
const PrizeIndex: FC<PrizeIndexProps> = (props: PrizeIndexProps) => {
  const [popUpShow, setPopUpShow] = useState(false);
  return (
    <div
      className="prize-index"
      style={ { backgroundImage: `url(${ BgLottery })` } }>
      <MyNavBar
        rightContent={ <MyImage className="ico-share" src={ iconPic.share }/> }>
        幸运大抽奖
      </MyNavBar>
      <MyImage
        src={ LotteryButton }
        onTouchEnd={ () => setPopUpShow(true) }
        className="lottery-button"
      />
      { popUpShow && <PopUp popUpShow={ popUpShow } setPopUpShow={ setPopUpShow }/> }
    </div>
  );
};

export default PrizeIndex;
