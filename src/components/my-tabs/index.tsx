import React, { FC } from 'react';
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
  return (
    <div className="left-tabs">
      <div className="tabs">
        { gridData.map((item, index) => (
          <div className="tab" key={ index }>{ item.label }</div>
        )) }
      </div>

      <div className="content">
        { new Array(10000).fill(1).map((item, index) => (
          <div className="tab">123</div>
        )) }
      </div>
    </div>
  );
};
