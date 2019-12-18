import React, { FC } from 'react';
import './index.less';
import Btn from '../image/btn2@2x.png'
import { MyImage } from "../../../../components/my-image";

type PrizeWinningProps = {};
const PrizeWinning: FC<PrizeWinningProps> = (props: PrizeWinningProps) => {
  return (
    <div className="prize-winning">
      <p className="congratulation">恭喜您获得现金红包</p>

      <p className="prize">
        <span className="money-type">￥</span>
        <span className="money-count">100</span>
      </p>


      <MyImage src={ Btn } className='btn'/>

      <p className="sponsors">
        本次活动由 aaa 冠名赞助
      </p>
    </div>
  );
};

export default PrizeWinning;
