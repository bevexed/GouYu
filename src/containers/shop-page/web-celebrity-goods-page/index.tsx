import React, { FC, useState } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import MySharePopUp from '../../../components/my-share-pop-up';

type Props = {};
const WebCelebrityGoodsPage: FC<Props> = (props: Props) => {
  const [popShow, setPopShow] = useState(false);
  return (
    <div className="web-celebrity-goods-page">
      <MyNavBar
        rightContent={
          <MyImage
            onTouchEnd={ () => setPopShow(true) }
            src={ iconPic.share }
            className="icon-share"
          />
        }>
        网红商品
      </MyNavBar>

      <div className="img-wrap">
        <MyImage
          src={
            'https://img.alicdn.com/tfs/TB14nyFrbY1gK0jSZTEXXXDQVXa-520-280.jpg_q90_.webp'
          }
          className={ 'good-img' }
        />
      </div>

      {/*<VipGoodList vipGoodList={ [1, 2, 3, 4, 5] }/>*/}

      <MySharePopUp
        popUpShow={ popShow }
        setPopUpShow={ () => setPopShow(false) }
      />
    </div>
  );
};

export default WebCelebrityGoodsPage;
