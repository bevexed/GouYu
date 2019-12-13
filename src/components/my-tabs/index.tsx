import React, { FC, useState } from 'react';
import './index.less';

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
export const LeftTabs: FC<TabsProps> = (props: TabsProps) => {
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
        { new Array(gridData.length).fill(1).map((item, index) => (
          <div className="content" key={ index }>
            { <ContentItem/> }
          </div>
        )) }
      </div>
    </div>
  );
};

type ContentItem = {};

const ContentItem: FC<ContentItem> = (props: ContentItem) => {
  return (
    <div className="content-item">
      <div className="title">为你推荐</div>

      <div className="catalogue-list">
        { new Array(6).fill(1).map((item, key) => (
          <div className="catalogue-item" key={ key }>
            <img
              src="http://img.alicdn.com/bao/uploaded/i1/2627785630/O1CN01LYCCKv1rSaQ6eGS1B_!!2627785630.jpg_400x400Q50s50.jpg_.webp"
              alt=""
            />
            <div className="label">精选好物</div>
          </div>
        )) }
      </div>
    </div>
  );
};
