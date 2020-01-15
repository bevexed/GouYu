import React, { FC } from 'react';
import './index.less';
import { useHistory } from "react-router";
import { ThreeClassifyProps } from "../../../redux/goods/reducer";


export type ContentItem = {
  twoName:string,
  ThreeClassify:ThreeClassifyProps,
};

export const ContentItem: FC<ContentItem> = (props: ContentItem) => {
  const { push } = useHistory();
  return (
    <div className="content-item">
      <div className="title">{props.twoName}</div>

      <div className="catalogue-list">
        { props.ThreeClassify.map((item, key) => (
          <div className="catalogue-item"
               onClick={ () => push('/shop/catalogue-page/catalogue-detail-page/'+item.id) }
               key={ key }>
            <img
              src={item.icon}
              alt=""
            />
            <div className="label">{item.twoName}</div>
          </div>
        )) }
      </div>
    </div>
  );
};
