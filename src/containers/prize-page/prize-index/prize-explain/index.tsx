import React, { FC } from 'react';
import './index.less'
import { MyImage } from "../../../../components/my-image";
import PopUpImg from "../../../../components/my-pop-up/image/pop-up.png";
import { LotteryButton } from "../../../../components/my-button";

type Props = {};
const PrizeExplain: FC<Props> = (props: Props) => {
  return (
    <div className='prize-explain'>
      <MyImage src={ PopUpImg } className={ 'pop-up-img' }/>

      <LotteryButton onTouchEnd={ () => {
      } } className={ 'join' }>
        立即加入
      </LotteryButton>
      <LotteryButton onTouchEnd={ () => {
      } } className={ 'invite' }>
        马上邀请
      </LotteryButton>
      <LotteryButton onTouchEnd={ () => {
      } } className={ 'gold' }>
        去赚金币
      </LotteryButton>

    </div>
  );
};

export default PrizeExplain
