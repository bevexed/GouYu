import React, { FC } from 'react';
import { TabBar } from 'antd-mobile';
import './index.less';
import HomePic_N from './images/tab_ico_home_n@2x.png';
import HomePic_S from './images/tab_ico_home_s@2x.png';
import CommunityPic_N from './images/tab_ico_community_n@2x.png';
import CommunityPic_S from './images/tab_ico_community_s@2x.png';
import MallPic_N from './images/tab_ico_mall_n@2x.png';
import MallPic_S from './images/tab_ico_mall_s@2x.png';
import MinePic_N from './images/tab_ico_mine_n@2x.png';
import MinePic_S from './images/tab_ico_mine_s@2x.png';
import Remand_N from './images/tab_ico_remand_n@2x.png';
import Remand_S from './images/tab_ico_remand_s@2x.png';
import { useHistory } from 'react-router';
import MyWhiteBlank from "../my-white-blank";

const Item = TabBar.Item;

interface Prop {
}

const tabBarItem = [
  {
    pathname: '/',
    icon: <img className="my-tab-bar-pic" src={ CommunityPic_N } alt={ '' }/>,
    selectedIcon: (
      <img className="my-tab-bar-pic" src={ CommunityPic_S } alt={ '' }/>
    ),
    title: '社区',
  },
  {
    pathname: '/shop',
    icon: <img className="my-tab-bar-pic" src={ MallPic_N } alt={ '' }/>,
    selectedIcon: <img className="my-tab-bar-pic" src={ MallPic_S } alt={ '' }/>,
    title: '商城',
  },
  {
    pathname: '/health',
    icon: <img className="my-tab-bar-pic" src={ HomePic_N } alt={ '' }/>,
    selectedIcon: <img className="my-tab-bar-pic" src={ HomePic_S } alt={ '' }/>,
    title: '康养',
  },
  {
    pathname: '/',
    icon: <img className="my-tab-bar-pic" src={ Remand_N } alt={ '' }/>,
    selectedIcon: <img className="my-tab-bar-pic" src={ Remand_S } alt={ '' }/>,
    title: '提醒',
  },
  {
    pathname: '/',
    icon: <img className="my-tab-bar-pic" src={ MinePic_N } alt={ '' }/>,
    selectedIcon: <img className="my-tab-bar-pic" src={ MinePic_S } alt={ '' }/>,
    title: '我的',
  },
];

export const MyTabBar: FC<Prop> = (prop: Prop) => {
  const { location, push } = useHistory();
  const { pathname } = location;

  return (
    <div className={ 'my-tab-bar-wrap' }>
      <div className="my-tab-bar">
        <TabBar
          tabBarPosition={ 'bottom' }
          tintColor={ '#21A3CD' }
          unselectedTintColor={ '#BBBDBD' }
          hidden={ false }>
          { tabBarItem.map((item, key) => (
            <Item
              { ...item }
              onPress={ () => push(item.pathname) }
              selected={ pathname === item.pathname }
              key={ key }
            />
          )) }
        </TabBar>
      </div>
      <MyWhiteBlank height={ 120 }/>
    </div>

  );
};
