import React, { FC } from 'react';
import './index.less';
import MyIcon from '../../../components/my-icon';
import { iconPic } from '../../../config/image';
import { useHistory } from 'react-router';

type Props = {};
const VipGiftBagPage: FC<Props> = (props: Props) => {
  const { go } = useHistory();
  return (
    <div className="vip-gift-bag-page">
      <section className="topic">
        <header>
          <MyIcon src={ iconPic.backBlack } white={ true } onTouchEnd={ () => go(-1) }/>
          <span className="title">299VIP礼包</span>
          <MyIcon src={ iconPic.share } white={ true } onTouchEnd={ () => {
          } }/>

        </header>
      </section>
    </div>
  );
};

export default VipGiftBagPage;
