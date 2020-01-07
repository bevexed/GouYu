import React, { FC, useEffect, useState } from 'react';
import './index.less';
import MySearchBar from '../../../components/my-search-bar';
import { MyBorderTag, MyGrayTag } from '../../../components/my-tag';
import { WingBlank } from 'antd-mobile';
import { useHistory } from "react-router";
import { AjaxHistorySearchQueryList } from "../../../api/search";

type SearchProps = {};
const SearchIndex: FC<SearchProps> = (props: SearchProps) => {
  const [HistoryList, setHistoryList] = useState<any>([]);
  useEffect(()=>{
    AjaxHistorySearchQueryList().then(
      res=>setHistoryList(res.data.records)
    )
  },[''])

  const { push } = useHistory();
  return (
    <div className="search-page">
      <MySearchBar/>
      <WingBlank>
        <div className="history-search">历史搜索</div>
        <div className="search-flex">
          { HistoryList.map((item:any, index:number) => (
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
