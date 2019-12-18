import React, { FC, ReactNode } from 'react';
import './index.less';
import { MyImage } from '../my-image';
import { iconPic } from '../../config/image';

type PopUpProps = { popUpShow: boolean; setPopUpShow: Function, children: ReactNode };
const MyPopUp: FC<PopUpProps> = (props: PopUpProps) => {
  return props.popUpShow ? (
    <div className="my-pop-up">
      <div className={ 'wrap' }>
        { props.children }
        <MyImage
          src={ iconPic.close }
          className='close'
          onTouchEnd={ () => {
            props.setPopUpShow(false);
          } }
        />
      </div>
    </div>
  ) : null;
};

export default MyPopUp;
