import React, { FC, TouchEventHandler } from 'react';
import { Grid } from 'antd-mobile';
import './index.less';
import { useHistory } from 'react-router';
import { useSelector } from "react-redux";
import { ReducersProps } from "../../../../redux/store";
import { HomePageDataProps } from "../../../../redux/home-page/reducer";

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
  gridData?: GridProps[];
}

const Catalogue: FC<GridsProps> = (props: GridsProps) => {
  const { specialList } = useSelector<ReducersProps, HomePageDataProps>(
    state => state.homePageData,
  );

  return (
    <Grid
      data={ specialList }
      square={ true }
      columnNum={ 5 }
      hasLine={ false }
      renderItem={ (dataItem: any) => <Item { ...dataItem } /> }
    />
  );
};

export default Catalogue;
