import React, { FC } from 'react';
import './index.less';
import HistoryIcon from '../image/pic_history_h@2x.png';
import { MyImage } from '../../../../components/my-image';

type PrizeHistoryProps = {};
const PrizeHistory: FC<PrizeHistoryProps> = (props: PrizeHistoryProps) => {
  return (
    <div className="prize-history">
      <MyImage src={ HistoryIcon } className="history-icon"/>
      <ul className="content-box">
        { new Array(10).fill(1).map((item, key) => (
          <li key={ key }>
            <div className="left">2019.09.09 15:00</div>
            <div className="right">¥9.9 现金红包</div>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default PrizeHistory;
