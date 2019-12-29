import React, { FC, useEffect, useState } from 'react';
import './index.less';
import { WingBlank } from 'antd-mobile';
import BtnArrange from './images/btn_arrange_h@2x.png';
import BtnBlock from './images/btn-block.png';
import BtnTriangle from './images/ico_point_d@2x.png';
import SortUp from './images/sort-1.png';
import SortNone from './images/sort-0.png';
import SortDown from './images/sort-2.png';
import { useDispatch, useSelector } from 'react-redux';
import { reqQueryClassifyList, reqQueryOneClassifyList } from '../../redux/goods/actions';
import { ReducersProps } from '../../redux/store';
import { OneClassifyListProps, QueryClassifyListProps } from '../../redux/goods/reducer';
import { ContentItem } from './my-tab';


type TabsProps = {};

interface LeftTabsProps extends TabsProps {
}

export const LeftTabs: FC<LeftTabsProps> = (props: LeftTabsProps) => {

  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reqQueryOneClassifyList());
  }, [dispatch]);
  const oneClassifyList = useSelector<ReducersProps, OneClassifyListProps>(
    state => state.oneClassifyList,
  );

  const queryClassifyList = useSelector<ReducersProps, QueryClassifyListProps>(
    state => state.queryClassifyList,
  );

  useEffect(()=>{
    const classifyId = oneClassifyList[currentTab].id + ''
    dispatch(reqQueryClassifyList({classifyId}))
  },[currentTab, dispatch, oneClassifyList]);

  return (
    <div className="left-tabs">
      <div className="tabs">
        {oneClassifyList.map((item, index) => (
          <div
            className={ ['tab', currentTab === index && 'active'].join(' ') }
            onTouchStart={ () => setCurrentTab(index) }
            key={ index }>
            { item.oneName }
          </div>
        ))}
      </div>

      <div className="contents">
        <img
          className={'top-img'}
          src="https://img.alicdn.com/tfs/TB1N45jX.H1gK0jSZSyXXXtlpXa-966-644.jpg_490x490q100.jpg_.webp"
          alt=""
        />
        { queryClassifyList.map((item, index) => (
          <div className="content" key={ index }>
            { <ContentItem ThreeClassify={item.ThreeClassify} twoName={item.twoName}/> }
          </div>
        )) }
      </div>
    </div>
  );
};

enum ListState {
  'block',
  'list',
}

enum SortState {
  'up',
  'down',
}

interface GoodStateBar extends TabsProps {
  getListState: (sortState: string) => void;
}

export const GoodStateBar: FC<GoodStateBar> = props => {
  const [stateBar, setStateBar] = useState('综合');
  const [listState, setListState] = useState(ListState.block);
  const [sortState, setSortState] = useState(SortState.up);
  const changePrinceSort = () => {
    if (stateBar === '价格') {
      return setSortState(
        sortState === SortState.up ? SortState.down : SortState.up,
      );
    }
    setStateBar('价格');
    setSortState(SortState.up);
  };

  const changeListState = () => {
    setListState(
      listState !== ListState.list ? ListState.list : ListState.block,
    );
    props.getListState(ListState[listState]);
  };
  return (
    <div className="good-state-bar-wrap">
      <WingBlank>
        <div className="good-state-bar">
          <div
            onTouchStart={() => setStateBar('综合')}
            className={['state-bar-item', stateBar === '综合' && 'active'].join(
              ' ',
            )}
          >
            综合
            {stateBar === '综合' && (
              <img src={BtnTriangle} className="btn-triangle" alt="" />
            )}
          </div>
          <div
            onTouchStart={() => setStateBar('销量')}
            className={['state-bar-item', stateBar === '销量' && 'active'].join(
              ' ',
            )}
          >
            销量
            {stateBar === '销量' && (
              <img src={BtnTriangle} className="btn-triangle" alt="" />
            )}
          </div>
          <div
            onTouchStart={changePrinceSort}
            className={['state-bar-item', stateBar === '价格' && 'active'].join(
              ' ',
            )}
          >
            价格
            {stateBar === '价格' ? (
              <img
                src={sortState === SortState.up ? SortUp : SortDown}
                className="sort"
                alt=""
              />
            ) : (
              <img src={SortNone} className="sort" alt="" />
            )}
          </div>
          <div className={'state-bar-item'} onTouchStart={changeListState}>
            <img
              src={listState === ListState.block ? BtnBlock : BtnArrange}
              className="btn-arrange"
              alt=""
            />
          </div>
        </div>
      </WingBlank>
    </div>
  );
};
