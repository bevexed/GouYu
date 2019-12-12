import React, { FC } from 'react';
import './index.less';
import MySearchBar from '../../../components/my-search-bar';

type CataloguePageProps = {};
const CataloguePage: FC<CataloguePageProps> = (props: CataloguePageProps) => {
  return (
    <div className="catalogue-page">
      <MySearchBar/>
    </div>
  );
};

export default CataloguePage;
