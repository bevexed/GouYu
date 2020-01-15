import React, { FC } from 'react';
import './index.less';
import { useHistory } from "react-router";
import { ThreeClassifyProps } from "../../../redux/goods/reducer";


export type ContentItem = {
  twoName:string,
  ThreeClassify:ThreeClassifyProps
};

export const ContentItem: FC<ContentItem> = (props: ContentItem) => {
  const { push } = useHistory();
  return (
    <div className="content-item">
      <div className="title">{props.twoName}</div>

      <div className="catalogue-list">
        { props.ThreeClassify.map((item, key) => (
          <div className="catalogue-item"
               onClick={ () => push('/shop/catalogue-page/catalogue-detail-page/营养保健') }
               key={ key }>
            <img
              src="http://img.alicdn.com/bao/uploaded/i1/2627785630/O1CN01LYCCKv1rSaQ6eGS1B_!!2627785630.jpg_400x400Q50s50.jpg_.webp"
              alt=""
            />
            <div className="label">{props.twoName}</div>
          </div>
        )) }
      </div>
    </div>
  );
};
