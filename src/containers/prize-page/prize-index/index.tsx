import React, { FC, useState } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import BgLottery from './image/bg_lottery@2x.png';
import LotteryButton from './image/btn@2x.png';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import MyPopUp from '../../../components/my-pop-up';
import PrizeExplain from './prize-explain';
import PrizeHistory from './prize-history';
import PrizeWinning from './prize-winning';

type PrizeIndexProps = {};
const PrizeIndex: FC<PrizeIndexProps> = (props: PrizeIndexProps) => {
  const [PrizeExplainState, setPrizeExplainState] = useState(false);
  const [PrizeHistoryState, setPrizeHistoryState] = useState(false);
  const [PrizeWinningState, setPrizeWinningState] = useState(true);
  return (
    <div
      className="prize-index"
      style={ { backgroundImage: `url(${ BgLottery })` } }>
      <MyNavBar
        rightContent={ <MyImage className="ico-share" src={ iconPic.share }/> }>
        幸运大抽奖
      </MyNavBar>
      <div
        className={ 'show-prize-history-button' }
        onTouchEnd={ () => setPrizeHistoryState(true) }>
        中奖记录 >
      </div>
      <MyImage
        src={ LotteryButton }
        onTouchEnd={ () => setPrizeExplainState(true) }
        className="lottery-button"
      />
      <MyPopUp
        popUpShow={ PrizeExplainState }
        setPopUpShow={ setPrizeExplainState }>
        <PrizeExplain/>
      </MyPopUp>

      <MyPopUp
        popUpShow={ PrizeHistoryState }
        setPopUpShow={ setPrizeHistoryState }>
        <PrizeHistory/>
      </MyPopUp>

      <MyPopUp
        popUpShow={ PrizeWinningState }
        setPopUpShow={ setPrizeWinningState }>
        <PrizeWinning/>
      </MyPopUp>
    </div>
  );
};

export default PrizeIndex;
