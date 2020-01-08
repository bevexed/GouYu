import React, { FC, useEffect, useState } from "react";
import "./index.less";
import MySearchBar from "../../../components/my-search-bar";
import { GoodStateBar } from "../../../components/my-tabs";
import { WhiteSpace, WingBlank } from "antd-mobile";
import { GoodList } from "../../shop-page/catalogue-page/catalogue-detail-page/catalogue-good-list";
import { useParams } from "react-router";
import { SearchTabBar } from "./search-tab-bar";
import ShopItem from "./shop-item";
import NoResult from "./no-result";
import { AjaxQueryGoodsList } from "../../../api/search";

type SearchResultProps = {};
const SearchResultPage: FC<SearchResultProps> = (props: SearchResultProps) => {
  const [list, setList] = useState<any>([]);
  const { search } = useParams();
  useEffect(() => {
    AjaxQueryGoodsList({
      goodsName: search + ""
    }).then(res => setList(res.data.records));
  }, [search]);
  const [listState, setListState] = useState("list");
  const [SearchBarState, setSearchBarState] = useState(0);
  return (
    <div className="search-result-page">
      <MySearchBar />
      <SearchTabBar
        getSearchBarState={SearchBarState => setSearchBarState(SearchBarState)}
      />
      {list.length === 0 ? (
        <NoResult />
      ) : SearchBarState === 0 ? (
        <>
          <GoodStateBar
            getListState={listState => {
              setListState(listState);
            }}
          />
          <WhiteSpace />
          {listState === "block" ? (
            "null" // <GuessYouLikeList guessYouLikeList={ [1, 2, 3, 4] }/>
          ) : (
            <GoodList goodList={list} />
          )}
        </>
      ) : (
        <WingBlank>
          {new Array(10).fill(1).map((item, key) => (
            <ShopItem key={key} />
          ))}
        </WingBlank>
      )}
    </div>
  );
};

export default SearchResultPage;
