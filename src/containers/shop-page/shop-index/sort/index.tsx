import React, { FC } from 'react';
import { Grid } from 'antd-mobile';

type Props = {};
const Sort: FC<Props> = (props: Props) => {
  const gridData = Array.from(new Array(10)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));
  return (
    <Grid
      data={ gridData }
      square={ true }
      columnNum={ 5 }
      hasLine={ false }
      renderItem={ (dataItem: any) => (
        <div className="grid-item">
          <img src={ dataItem.icon } alt=""/>
          <p>I am title..</p>
        </div>
      ) }
    />
  );
};

export default Sort;
