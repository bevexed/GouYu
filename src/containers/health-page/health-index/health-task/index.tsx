import React, { FC } from 'react';
import './index.less';
import { WingBlank } from 'antd-mobile';
import MyMore from '../../../../components/my-more';
import MyTitle from '../../../../components/my-title';
import RunIcon from './image/ico_run_b@2x.png';
import WalkIco from './image/ico_walk_b@2x.png';
import YogaIcon from './image/ico_yoga_b@2x.png';
import CardIcon from './image/ico_other_b@2x.png';
import { MyImage } from '../../../../components/my-image';
import { MyGradientButton } from '../../../../components/my-button';

const MenuList = [
  { icon: RunIcon, label: '跑步', path: '' },
  { icon: WalkIco, label: '走路', path: '' },
  { icon: YogaIcon, label: '瑜伽', path: '' },
  { icon: CardIcon, label: '其他', path: '' },
];

type HealthTaskProps = {};
const HealthTask: FC<HealthTaskProps> = (props: HealthTaskProps) => {
  return (
    <div className="health-task">
      <MyMore
        path={ '' }
        children={ <MyTitle>近30天完成以下康养任务</MyTitle> }
        rightContent={ '去打卡' }
      />
      <WingBlank>
        <ul className="health-task-menu-list">
          { MenuList.map((item, key) => (
            <li key={ key } className="health-task-menu-item">
              <header>
                <MyImage src={ item.icon } className={ 'icon' }/>
                <p>{ item.label }</p>
              </header>
              <MyGradientButton>去打卡</MyGradientButton>
            </li>
          )) }
        </ul>
      </WingBlank>
    </div>
  );
};

export default HealthTask;
