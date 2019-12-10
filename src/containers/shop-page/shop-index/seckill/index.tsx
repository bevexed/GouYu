import React, { FC, ReactNode, useState } from 'react';
import './index.less';
import { iconPic } from '../../../../config/image';
import { Tabs, WingBlank } from 'antd-mobile';
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

const _tabs = [
  { title: '08:00', state: 0 },
  { title: '10:00', state: 1 },
  { title: '12:00', state: 1 },
  { title: '14:00', state: 1 },
  { title: '16:00', state: 1 },
  { title: '18:00', state: 1 },
  { title: '20:00', state: 1 },
];

const tabs = _tabs.map(({ title, state }, index) => ({
  title,
  state,
  index,
}));

type Props = {};
const Seckill: FC<Props> = (props: Props) => {
  const [page, setPage] = useState(0);
  return (
    <div className="seckill">
      <WingBlank>
        <header>
          <span>限时秒杀</span>
          <p>更多</p>
          <img src={ iconPic.more } alt=""/>
        </header>
      </WingBlank>
      <Tabs
        tabs={ tabs as any }
        initialPage={ page }
        page={ page }
        onChange={ (tab, index) => setPage(index) }
        tabBarBackgroundColor={ '#F8F9FA' }
        tabBarActiveTextColor={ '#262D2C' }
        tabBarInactiveTextColor={ '#747978' }
        tabBarUnderlineStyle={ { display: 'none' } }
        renderTab={ (props: any) => <RenderTab { ...props } page={ page }/> }>
        { RenderContent }
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
    <div className={ 'tab-content' }>
      <header>
        <img
          src="https://hbimg.huabanimg.com/64e30dd609efc8159a76966f968de5a0f95daff012103-5dIdZS_fw658"
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
        <MyTag>VIP省 ￥5.99</MyTag>
        <MyBuyButton state={ 'red' } onTouchEnd={ () => {
        } }>
          已结束
        </MyBuyButton>
      </footer>
    </div>
  );
};

export default Seckill;
