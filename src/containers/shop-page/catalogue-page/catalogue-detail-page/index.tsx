import React, { FC, useEffect, useState } from 'react';
import './index.less';
import { useParams } from 'react-router';
import { MyNavBar } from '../../../../components/my-nav-bar';
import { GoodList } from './catalogue-good-list';
import { WhiteSpace } from 'antd-mobile';
import { AjaxGoodsQueryGoodsList } from "../../../../api/goods";

type Props = {};
const CataloguePage: FC<Props> = (props: Props) => {
  const { sortName } = useParams();
  const [listState, setListState] = useState('list');
  useEffect(()=>{
    AjaxGoodsQueryGoodsList({
      classifyId:sortName
    }).then(res=>{
      console.log(res);
    })
  })
  return (
    <div className={ 'catalogue-page' }>
      <MyNavBar>{ sortName }</MyNavBar>
      {/*<GoodStateBar*/}
      {/*  getListState={ listState => {*/}
      {/*    setListState(listState);*/}
      {/*  } }*/}
      {/*/>*/}
      <WhiteSpace/>
        <GoodList
          goodList={[]}
        />
    </div>
  );
};

export default CataloguePage;
