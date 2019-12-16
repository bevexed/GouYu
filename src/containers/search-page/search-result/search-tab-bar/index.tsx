import React, { FC, useState } from 'react';
import './index.less';

type SearchTabBarProps = {
  getSearchBarState: (SearchBarState: number) => void;
};

const BarList = [
  {
    label: '商品',
  },
  {
    label: '店铺',
  },
];

export const SearchTabBar: FC<SearchTabBarProps> = (
  props: SearchTabBarProps,
) => {
  const [currentSelect, setCurrentSelect] = useState(0);
  return (
    <div className="search-tab-bar">
      { BarList.map((item, index) => (
        <div
          onTouchStart={ () => {
            setCurrentSelect(index);
            props.getSearchBarState(index);
          } }
          key={ index }
          className={ [
            'search-tab-bar-item',
            currentSelect === index && 'active',
          ].join(' ') }>
          { item.label }
        </div>
      )) }
    </div>
  );
};
