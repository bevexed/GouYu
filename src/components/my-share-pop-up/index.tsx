import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../my-image';
import { iconPic } from '../../config/image';

type Props = {
  popUpShow: boolean;
  setPopUpShow: Function;
};
const MySharePopUp: FC<Props> = (props: Props) => {
  return props.popUpShow ? (
    <div className="_my-share-pop-up">
      <div className="wrap">
        <div className="_title">分享至</div>
        <MyImage
          src={ iconPic._close }
          className={ 'close' }
          onTouchEnd={ () => {
            props.setPopUpShow(false);
          } }
        />
        <div className="btn-list">
          <div className={ 'btn-item' }>
            <MyImage src={ iconPic.wx }/>
            <span> 微信</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default MySharePopUp;
