import React, { FC } from 'react';
import './index.less';
import MySearchBar from '../../../components/my-search-bar';
import { LeftTabs } from '../../../components/my-tabs';

type CataloguePageProps = {};
const CataloguePage: FC<CataloguePageProps> = (props: CataloguePageProps) => {
  return (
    <div className="catalogue-page">
      <MySearchBar />
      <LeftTabs/>
    </div>
  );
};

export default CataloguePage;
