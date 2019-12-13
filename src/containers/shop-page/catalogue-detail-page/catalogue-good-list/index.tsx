import React, { FC } from 'react';
import './index.less';
import MyTag from '../../../../components/my-tag';
import { iconPic } from '../../../../config/image';
import MyWhiteBlank from "../../../../components/my-white-blank";

type GoodItemProps = {
  img: string;
  title: string;
};

type GoodListProps = {
  goodList: GoodItemProps[];
};

export const GoodItem: FC<GoodItemProps> = (props: GoodItemProps) => {
  return (
    <>
      <div className="good-item">
        <img className="good-img" src={ props.img } alt=""/>
        <section className="right">
          <div className="title">{ props.title }</div>

          <div className="price">
            <MyTag>VIP省 ￥5.99</MyTag>
            <MyTag>分享赚 ￥5.99</MyTag>
            <div className="ori">¥49</div>
          </div>


          <footer>
            <span className="del">￥39</span>
            <img src={ iconPic.vip } alt=""/> <span className="vip">￥29</span>
            <div className="sold-out">已售563件</div>

          </footer>
        </section>
      </div>
      <MyWhiteBlank backgroundColor={ '#F3F7F7' }/>
    </>
  );
};

export const GoodList: FC<GoodListProps> = (props: GoodListProps) => {
  return (
    <div>
      { props.goodList.map((prop, index) => (
        <GoodItem { ...prop } key={ index }/>
      )) }
    </div>
  );
};
