import React, { FC, ReactNode, useState } from 'react';
import './index.less';
import { WingBlank } from 'antd-mobile';
import BtnArrange from './images/btn_arrange_h@2x.png';
import BtnBlock from './images/btn-block.png';
import BtnTriangle from './images/ico_point_d@2x.png';
import SortUp from './images/sort-1.png';
import SortNone from './images/sort-0.png';
import SortDown from './images/sort-2.png';

let gridData = [
  {
    icon: '',
    label: '环球美食',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '国际尖货',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '享瘦生活',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '居家必备',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '个人护理',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '母婴儿童',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '营养保健',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '爆品专区',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '秒杀活动',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '更多分类',
    path: '/shop/catalogue-page',
  },
  {
    icon: '',
    label: '环球美食',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '国际尖货',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '享瘦生活',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '居家必备',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '个人护理',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '母婴儿童',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '营养保健',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '爆品专区',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '秒杀活动',
    path: '/shop/hot-style-page',
  },
  {
    icon: '',
    label: '更多分类',
    path: '/shop/catalogue-page',
  },
];

type TabsProps = {};

interface LeftTabsProps extends TabsProps {
  children: ReactNode;
}

export const LeftTabs: FC<LeftTabsProps> = (props: LeftTabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="left-tabs">
      <div className="tabs">
        { gridData.map((item, index) => (
          <div
            className={ ['tab', currentTab === index && 'active'].join(' ') }
            onTouchStart={ () => setCurrentTab(index) }
            key={ index }>
            { item.label }
          </div>
        )) }
      </div>

      <div className="contents">
        <img
          className={ 'top-img' }
          src="https://img.alicdn.com/tfs/TB1N45jX.H1gK0jSZSyXXXtlpXa-966-644.jpg_490x490q100.jpg_.webp"
          alt=""
        />
        { props.children }
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
      setSortState(sortState === SortState.up ? SortState.down : SortState.up);
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
            onTouchStart={ () => setStateBar('综合') }
            className={ ['state-bar-item', stateBar === '综合' && 'active'].join(
              ' ',
            ) }>
            综合
            { stateBar === '综合' && (
              <img src={ BtnTriangle } className="btn-triangle" alt=""/>
            ) }
          </div>
          <div
            onTouchStart={ () => setStateBar('销量') }
            className={ ['state-bar-item', stateBar === '销量' && 'active'].join(
              ' ',
            ) }>
            销量
            { stateBar === '销量' && (
              <img src={ BtnTriangle } className="btn-triangle" alt=""/>
            ) }
          </div>
          <div
            onTouchStart={ changePrinceSort }
            className={ ['state-bar-item', stateBar === '价格' && 'active'].join(
              ' ',
            ) }>
            价格
            { stateBar === '价格' ? (
              <img
                src={ sortState === SortState.up ? SortUp : SortDown }
                className="sort"
                alt=""
              />
            ) : (
              <img src={ SortNone } className="sort" alt=""/>
            ) }
          </div>
          <div className={ 'state-bar-item' } onTouchStart={ changeListState }>
            <img
              src={ listState === ListState.block ? BtnBlock : BtnArrange }
              className="btn-arrange"
              alt=""
            />
          </div>
        </div>
      </WingBlank>
    </div>
  );
};
