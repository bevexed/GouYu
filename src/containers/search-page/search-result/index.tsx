import React, { FC, useState } from 'react';
import './index.less';
import MySearchBar from '../../../components/my-search-bar';
import { GoodStateBar } from '../../../components/my-tabs';
import { WhiteSpace } from 'antd-mobile';
import GuessYouLikeList from '../../shop-page/shop-index/guess-you-like';
import { GoodList } from '../../shop-page/catalogue-detail-page/catalogue-good-list';
import { useParams } from 'react-router';
import { SearchTabBar } from './search-tab-bar';

type SearchResultProps = {};
const SearchResult: FC<SearchResultProps> = (props: SearchResultProps) => {
  const { search } = useParams();
  console.log(search);
  const [listState, setListState] = useState('list');
  const [SearchBarState, setSearchBarState] = useState(0);
  return (
    <div>
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
            <GuessYouLikeList guessYouLikeList={ [1, 2, 3, 4] }/>
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
      ) : null }
    </div>
  );
};

export default SearchResult;