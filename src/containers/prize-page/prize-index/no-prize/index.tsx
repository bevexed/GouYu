import React, { FC } from 'react';
import './index.less'

type NoPrizeProps = {};
const NoPrize: FC<NoPrizeProps> = (props: NoPrizeProps) => {
  return (
    <div className='no-prize'>
      很遗憾，没有中奖
    </div>
  );
};

export default NoPrize
