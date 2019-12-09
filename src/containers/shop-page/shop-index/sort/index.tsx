import React, { FC } from 'react';
import { Grid } from 'antd-mobile';
import './index.less';

type Props = {};

type GridProps = {
  icon: string;
  label: string;
};

const Item: FC<GridProps> = (dataItem: GridProps) => (
  <div className="grid-item">
    <img src={ dataItem.icon } alt=""/>
    <p>环球美食</p>
  </div>
);

const Sort: FC<Props> = (props: Props) => {
  const gridData: GridProps[] = Array.from(new Array(10)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    label: '环球美食',
  }));
  return (
    <Grid
      data={ gridData }
      square={ true }
      columnNum={ 5 }
      hasLine={ false }
      renderItem={ (dataItem: any) => <Item { ...dataItem } /> }
    />
  );
};

export default Sort;
