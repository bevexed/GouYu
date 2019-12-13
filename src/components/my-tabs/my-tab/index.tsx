import React, { FC } from 'react';
import './index.less';
import { useHistory } from "react-router";

type ContentItem = {};

export const ContentItem: FC<ContentItem> = (props: ContentItem) => {
  const { push } = useHistory();
  return (
    <div className="content-item">
      <div className="title">为你推荐</div>

      <div className="catalogue-list">
        { new Array(6).fill(1).map((item, key) => (
          <div className="catalogue-item"
               onTouchStart={ () => push('/shop/catalogue-page/catalogue-detail-page/营养保健') }
               key={ key }>
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
