import React, { FC } from 'react';
import './index.less';


type ShopItemProps = {
  img: string;
  title: '';
}

type ShopListProps = {
  ShopList: ShopItemProps[];
};

export const ShopItem: FC<ShopItemProps> = (props: ShopItemProps) => {
  return <div className="shop-item">
    <img src="" alt=""/>
    <section className="left">

    </section>
  </div>;
};

export const ShopList: FC<ShopListProps> = (props: ShopListProps) => {
  return <div>2</div>;
};
