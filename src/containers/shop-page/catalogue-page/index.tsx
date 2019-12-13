import React, { FC } from 'react';
import './index.less';
import MySearchBar from '../../../components/my-search-bar';
import { LeftTabs } from '../../../components/my-tabs';
import { ContentItem } from '../../../components/my-tabs/my-tab';

type CataloguePageProps = {};
const CataloguePage: FC<CataloguePageProps> = (props: CataloguePageProps) => {
  return (
    <div className="catalogue-page">
      <MySearchBar/>
      <LeftTabs>
        { new Array(111).fill(1).map((item, index) => (
          <div className="content" key={ index }>
            { <ContentItem/> }
          </div>
        )) }
      </LeftTabs>
    </div>
  );
};

export default CataloguePage;
