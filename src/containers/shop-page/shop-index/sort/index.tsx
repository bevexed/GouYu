import React, { FC, TouchEventHandler } from 'react';
import { Grid } from 'antd-mobile';
import './index.less';
import { useHistory } from 'react-router';

type Props = {};

type GridProps = {
  icon: string;
  label: string;
  path: string;
  onTouchStart?: TouchEventHandler;
};

const Item: FC<GridProps> = (dataItem: GridProps) => (
  <div className="grid-item" onTouchStart={ dataItem.onTouchStart }>
    <img src={ dataItem.icon } alt=""/>
    <p>{ dataItem.label }</p>
  </div>
);

interface GridsProps {
  gridData?: GridProps[];
}

let gridData: GridProps[] = [
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
    path: '/shop/hot-style-page',
  },
];
const requireContext = (require as any).context(
  './image',
  true,
  /^\.\/.*\.png$/,
);
const images = requireContext.keys().map(requireContext);
gridData = gridData.map((item, index) => ({
  icon: images[index],
  label: item.label,
  path: item.path,
}));

const Sort: FC<GridsProps> = (props: GridsProps) => {
  const { push } = useHistory();
  return (
    <Grid
      data={ gridData }
      square={ true }
      columnNum={ 5 }
      hasLine={ false }
      renderItem={ (dataItem: any) => (
        <Item { ...dataItem } onTouchStart={ () => push(dataItem.path) }/>
      ) }
    />
  );
};

export default Sort;
