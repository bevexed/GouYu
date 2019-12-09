import React, { FC } from 'react';
import { TabBar } from 'antd-mobile';

const Item = TabBar.Item;

interface Props {
}

const tabBarItem = [
  {
    onPress: () => {
    },
    selected: false,
    icon: (
      <div
        style={ {
          width: '22px',
          height: '22px',
          background:
            'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
        } }
      />
    ),
    selectedIcon: (
      <div
        style={ {
          width: '22px',
          height: '22px',
          background:
            'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
        } }
      />
    ),
    title: '123',
  },
];

export const MyTabBar: FC<Props> = (props: Props) => {
  return (
    <TabBar
      tabBarPosition={ 'bottom' }
      tintColor={ '#21A3CD' }
      unselectedTintColor={ '#BBBDBD' }
      hidden={ false }>
      { tabBarItem.map((item, key) => (
        <Item { ...item } key={ key }/>
      )) }
    </TabBar>
  );
};
