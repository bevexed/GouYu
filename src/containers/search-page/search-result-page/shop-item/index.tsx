import React, { FC } from 'react';
import './index.less';
import Heart from './image/xin.png';
import { GoToShopButton } from "../../../../components/my-button";

type ShopItemProps = {};
const ShopItem: FC<ShopItemProps> = (props: ShopItemProps) => {
  return (
    <div className="search-shop-item">
      <img
        src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i5/TB1ZTOvGf5TBuNjSspmKSCDRVXa_093747.jpg_250x250.jpg_.webp"
        alt=""
        className="search-shop-item-img"
      />
      <div className="right">
        <div className="shop-name">卓宜家居</div>
        <div className="shop-level">
          { new Array(5).fill(1).map((item, key) => (
            <img src={ Heart } alt="" className={ (key > 2 ? 'gray' : '') } key={ key }/>
          )) }
        </div>
        <div className="shop-attention">
          <span className="red">
            123
          </span>
          <span className="gray">
            人关注
          </span>
        </div>
      </div>

      <GoToShopButton/>
    </div>
  );
};

export default ShopItem;
