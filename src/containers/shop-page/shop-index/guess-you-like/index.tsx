import React, { FC } from 'react';
import { WingBlank } from 'antd-mobile';
import './index.less';
import MyTag from '../../../../components/my-tag';
import { VipPrice } from '../../../../components/price';

type GuessYouLikeItemProps = {};
const GuessYouLikeItem: FC<GuessYouLikeItemProps> = (
  props: GuessYouLikeItemProps,
) => {
  return (
    <div className="guess-you-like-item">
      <img
        className="guess-you-like-item-img"
        src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2249185639/O1CN01YoMYXT1rWhzX5e5tV_!!2249185639-0-pixelsss.jpg_180x180.jpg_.webp"
        alt=""
      />
      <section className="bottom">
        <div className="guess-you-like-item-title">
          护肝养胃 熬夜&酒局必… 护肝养胃 熬夜&酒局必…
        </div>

        <div className="guess-you-like-item-dis">
          澳洲进口，swisse奶蓟草护肝片澳洲进口，swisse奶蓟草护肝片
        </div>

        <div className="guess-you-like-item-price">
          <div className="guess-you-like-item-real">￥888</div>
          <div className="guess-you-like-item-ori">￥999</div>
        </div>

        <div className="tags">
          <MyTag>VIP省￥5.99</MyTag>
          <MyTag>分享赚￥2.99</MyTag>
        </div>

        <div className="vip-price">
          <VipPrice>666</VipPrice>
          <div className="sold-out">已售999＋</div>
        </div>
      </section>
    </div>
  );
};

type GuessYouLikeListProps = {
  guessYouLikeList: GuessYouLikeItemProps[];
};
const GuessYouLikeList: FC<GuessYouLikeListProps> = (
  props: GuessYouLikeListProps,
) => {
  return (
    <div className="guess-you-like">
      <WingBlank>
        <section className='list'>

          { props.guessYouLikeList.map((item, index) => (
            <GuessYouLikeItem key={ index }/>
          )) }
        </section>

      </WingBlank>
    </div>
  );
};

export default GuessYouLikeList;
