import React, { FC, TouchEventHandler } from 'react';
import { Grid } from 'antd-mobile';
import './index.less';
import { useHistory } from 'react-router';

type Props = {};

type GridProps = {
  icon: string;
  name: string;
  path: string;
  onTouchStart?: TouchEventHandler;
};

const Item: FC<GridProps> = (dataItem: GridProps) => {
  const { push } = useHistory();

  return (
    <div className="grid-item" onTouchStart={ () => push(dataItem.path) }>
      <img src={ dataItem.icon } alt=""/>
      <p>{ dataItem.name }</p>
    </div>
  );
};

interface GridsProps {
  specialList?: any[];
}

const Catalogue: FC<GridsProps> = (props: GridsProps) => {
  return (
    <Grid
      data={ props.specialList }
      square={ true }
      columnNum={ 5 }
      hasLine={ false }
      renderItem={ (dataItem: any) => <Item { ...dataItem } /> }
    />
  );
};

export default Catalogue;
