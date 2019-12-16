import React, { FC } from 'react';
import './index.less';
import PopUpImg from './image/pop-up.png';
import { MyImage } from '../../../../components/my-image';
import { LotteryButton } from '../../../../components/my-button';
import { iconPic } from '../../../../config/image';

type PopUpProps = { popUpShow: boolean; setPopUpShow: Function };
const PopUp: FC<PopUpProps> = (props: PopUpProps) => {
  return props.popUpShow ? (
    <div className="pop-up">
      <div className={ 'wrap' }>
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
        <MyImage
          src={ iconPic.close }
          className={ 'close' }
          onTouchEnd={ () => {
            props.setPopUpShow(false);
          } }
        />
      </div>
    </div>
  ) : null;
};

export default PopUp;
