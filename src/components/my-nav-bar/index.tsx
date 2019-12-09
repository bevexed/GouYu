import React, { FC } from 'react';
import { NavBar } from 'antd-mobile';
import './index.less';
import { MyImage } from '../my-image';
import { iconPic } from '../../config/image';
import { useHistory } from 'react-router';

interface Prop {
  children?: string | HTMLElement;
}

export const MyNavBar: FC<Prop> = (prop: Prop) => {
  console.log(useHistory());
  const { length, goBack } = useHistory();
  return (
    <NavBar
      mode={ 'light' }
      icon={
        length && (
          <MyImage
            className={ 'nav-bar-ico' }
            src={ iconPic.backBlack }
            onTouchEnd={ () => goBack() }
          />
        )
      }>
      <span className="nav-bar-title">{ prop.children }</span>
    </NavBar>
  );
};
