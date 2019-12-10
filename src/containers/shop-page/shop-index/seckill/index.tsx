import React, { FC, ReactNode, useState } from 'react';
import './index.less';
import { iconPic } from '../../../../config/image';
import { Tabs, WingBlank } from 'antd-mobile';

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
    <div
      style={ {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
        backgroundColor: '#fff',
      } }>
      <p>Content of { tab.title }</p>
    </div>
  );
};

export default Seckill;
