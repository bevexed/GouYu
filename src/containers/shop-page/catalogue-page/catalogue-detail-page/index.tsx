import React, { FC, useState } from 'react';
import './index.less';
import { useParams } from 'react-router';
import { MyNavBar } from '../../../../components/my-nav-bar';
import { GoodStateBar } from '../../../../components/my-tabs';
import { GoodList } from './catalogue-good-list';
import { WhiteSpace } from 'antd-mobile';

type Props = {};
const CataloguePage: FC<Props> = (props: Props) => {
  const { sortName } = useParams();
  const [listState, setListState] = useState('list');

  return (
    <div className={ 'catalogue-page' }>
      <MyNavBar>{ sortName }</MyNavBar>
      <GoodStateBar
        getListState={ listState => {
          setListState(listState);
        } }
      />
      <WhiteSpace/>
      { listState === 'block' ? (
        ''
        // <GuessYouLikeList guessYouLikeList={ [1, 2, 3, 4] }/>
      ) : (
        <GoodList
          goodList={ [
            {
              img:
                'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/668693/O1CN01wDbsyy2E5RYoR2ULs_!!668693.jpg_180x180.jpg_.webp',
              title:
                '护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配',
            },
            {
              img:
                'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/668693/O1CN01wDbsyy2E5RYoR2ULs_!!668693.jpg_180x180.jpg_.webp',
              title:
                '护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物草本配',
            },
          ] }
        />
      ) }
    </div>
  );
};

export default CataloguePage;
