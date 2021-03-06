import React, { FC } from 'react';
import './index.less';
import MySearchBar from '../../../components/my-search-bar';
import { MyBorderTag, MyGrayTag } from '../../../components/my-tag';
import { WingBlank } from 'antd-mobile';
import { useHistory } from "react-router";

type SearchProps = {};
const SearchIndex: FC<SearchProps> = (props: SearchProps) => {
  const { push } = useHistory();
  return (
    <div className="search-page">
      <MySearchBar/>
      <WingBlank>
        <div className="history-search">历史搜索</div>
        <div className="search-flex">
          { new Array(6).fill('亚健康调理').map((item, index) => (
            <MyGrayTag key={ index } onTouchStart={ () => push('/search-result/' + index) }>{ item }</MyGrayTag>
          )) }
        </div>
        <div className="hot-search">热门搜索</div>
        <div className="search-flex">
          { new Array(6).fill('亚健康调理').map((item, index) => (
            <MyBorderTag key={ index }>{ item }</MyBorderTag>
          )) }
        </div>
      </WingBlank>
    </div>
  );
};

export default SearchIndex;
