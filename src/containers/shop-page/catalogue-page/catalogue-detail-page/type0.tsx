import React, { FC, useEffect, useState } from 'react';
import './index.less';
import { useParams } from 'react-router';
import { MyNavBar } from '../../../../components/my-nav-bar';
import { GoodList } from './catalogue-good-list';
import { WhiteSpace } from 'antd-mobile';
import { AjaxGoodsGetSpecialGoodsPageList } from "../../../../api/goods";

type Props = {};
const CataloguePage: FC<Props> = (props: Props) => {
  const { sortName ,sortId} = useParams();
  const [listState, setListState] = useState('list');
  const [goodList, setGoodList] = useState<any[]>([]);
  useEffect(()=>{
    AjaxGoodsGetSpecialGoodsPageList({specialId:sortId}).then(res => {
      setGoodList(res.data.records)
    });
  },[''])
  return (
    <div className={ 'catalogue-page' }>
      <MyNavBar>{ sortName}</MyNavBar>
      {/*<GoodStateBar*/}
      {/*  getListState={ listState => {*/}
      {/*    setListState(listState);*/}
      {/*  } }*/}
      {/*/>*/}
      <WhiteSpace/>
        <GoodList
          goodList={goodList}
        />
    </div>
  );
};

export default CataloguePage;
