import React, { FC, useState } from 'react';
import './index.less';
import MySearchBar from '../../../components/my-search-bar';
import { GoodStateBar } from '../../../components/my-tabs';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { GoodList } from '../../shop-page/catalogue-page/catalogue-detail-page/catalogue-good-list';
import { useParams } from 'react-router';
import { SearchTabBar } from './search-tab-bar';
import ShopItem from './shop-item';
import NoResult from "./no-result";

type SearchResultProps = {};
const SearchResultPage: FC<SearchResultProps> = (props: SearchResultProps) => {
  const { search } = useParams();
  console.log(search);
  const [listState, setListState] = useState('list');
  const [SearchBarState, setSearchBarState] = useState(0);
  return (
    <div className='search-result-page'>
      <MySearchBar/>
      <SearchTabBar
        getSearchBarState={ SearchBarState => setSearchBarState(SearchBarState) }
      />
      { SearchBarState === 0 ? (
          <>
            <GoodStateBar
              getListState={ listState => {
                setListState(listState);
              } }
            />
            <WhiteSpace/>
            { listState === 'block' ? (
              'null' // <GuessYouLikeList guessYouLikeList={ [1, 2, 3, 4] }/>
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
          </>
        ) :
        <WingBlank>
          {
            new Array(10).fill(1).map((item, key) => (
              <ShopItem key={ key }/>
            )) }
        </WingBlank>
      }

      <NoResult/>
    </div>
  );
};

export default SearchResultPage;
