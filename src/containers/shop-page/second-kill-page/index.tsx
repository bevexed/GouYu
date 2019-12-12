import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../components/my-nav-bar';
import Seckill from '../components/seckill';
import { GoodList } from '../shop-index/good-list';

type Props = {};
const SecondKillPage: FC<Props> = (props: Props) => {
  return (
    <div className='second-kill-page'>
      <MyNavBar>限时秒杀</MyNavBar>

      <div className='fixed'>
        <Seckill
          contentShow={ false }
          tabs={ [
            { title: '08:00', state: 0 },
            { title: '10:00', state: 1 },
            { title: '12:00', state: 1 },
            { title: '14:00', state: 1 },
            { title: '16:00', state: 1 },
            { title: '18:00', state: 1 },
            { title: '20:00', state: 1 },
          ] }
        />
      </div>

      <GoodList
        goodList={ new Array(10).fill(
          {
            img:
              'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/668693/O1CN01wDbsyy2E5RYoR2ULs_!!668693.jpg_180x180.jpg_.webp',
            title:
              '护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配',
          },
        ) }
      />
    </div>
  );
};

export default SecondKillPage;
