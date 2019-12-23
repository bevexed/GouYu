import React, { FC, ReactNode, useState } from 'react';
import './index.less';
import { iconPic } from '../../../../config/image';
import { Tabs } from 'antd-mobile';
import MyTag from '../../../../components/my-tag';
import { MyBuyButton } from '../../../../components/my-button';

enum State {
  '已开抢',
  '抢购中',
}

type TabProps = {
  title: ReactNode;
  state: number;
  index: number;
  page?: number;
};

type SeckillProps = {
  tabs: { title: string; state: number }[];
  contentShow?: boolean;
};
const Seckill: FC<SeckillProps> = ({
                                     tabs,
                                     contentShow = true,
                                   }: SeckillProps) => {
  const [page, setPage] = useState(0);
  const _tabs = tabs.map(({ title, state }, index) => ({
    title,
    state,
    index,
  }));
  return (
    <div className="seckill">
      <Tabs
        tabs={ _tabs as any }
        initialPage={ page }
        page={ page }
        onChange={ (tab, index) => setPage(index) }
        tabBarBackgroundColor={ '#F8F9FA' }
        tabBarActiveTextColor={ '#262D2C' }
        tabBarInactiveTextColor={ '#747978' }
        tabBarUnderlineStyle={ { display: 'none' } }
        renderTab={ (props: any) => <RenderTab { ...props } page={ page }/> }>
        { contentShow && RenderContent }
      </Tabs>
    </div>
  );
};

const RenderTab: FC<TabProps> = (tab: TabProps) => {
  return (
    <div className={ ['tab-item', tab.index === tab.page && 'active'].join(' ') }>
      <span className={ 'first' }>{ tab.title }</span> <br/>
      <span className={ 'second' }>{ State[tab.state] }</span>
    </div>
  );
};

const RenderContent: FC<TabProps> = (tab: TabProps) => {
  return (
    <div className="tab-content">
      <header>
        <img
          src={
            'https://img.alicdn.com/simba/img/TB1Jf8bq8v0gK0jSZKbSuvK2FXa.jpg'
          }
          alt=""
        />
      </header>
      <h1>清苷朝鲜蓟枳椇子植物饮料</h1>
      <p>
        护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物…
      </p>
      <section className={ 'price' }>
        <span className="ori">￥49</span>
        <span className="del">￥39</span>
        <img src={ iconPic.vip } alt=""/> <span className="vip">￥29</span>
        <span className="sold">已售563件</span>
      </section>
      <footer>
        <MyTag>VIP省 ￥5.99</MyTag>
        <MyTag>分享赚 ￥5.99</MyTag>
        <MyBuyButton state={ 'soldOut' } onTouchEnd={ () => {
        } }/>
      </footer>
    </div>
  );
};

export default Seckill;
