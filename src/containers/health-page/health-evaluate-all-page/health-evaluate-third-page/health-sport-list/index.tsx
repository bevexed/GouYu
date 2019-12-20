import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../../../components/my-image';
import IconRun from './image/ico_run_h@2x.png';
import IconWalk from './image/ico_walk_h@2x.png';
import IconYoga from './image/ico_yoga_h@2x.png';
import IconOther from './image/ico_other_h@2x.png';
import IconNoSport from './image/ico_nosport_h@2x.png';

const healthSportList = [
  {
    imgUrl: IconRun,
    label: '跑步',
  },
  {
    imgUrl: IconWalk,
    label: '走路',
  },
  {
    imgUrl: IconYoga,
    label: '瑜伽',
  },
  {
    imgUrl: IconOther,
    label: '其他',
  },
  {
    imgUrl: IconNoSport,
    label: '没运动',
  },
];
type Props = {};
const HealthSportList: FC<Props> = (props: Props) => {
  return (
    <div className="health-sport-list">
      { healthSportList.map((item, key) => (
        <HealthSportItem { ...item } key={ key }/>
      )) }
    </div>
  );
};

interface HealthSportItemProps {
  imgUrl: string;
  label: string;
}

const HealthSportItem: FC<HealthSportItemProps> = props => {
  return (
    <div className="health-sport-item">
      <MyImage src={ props.imgUrl } className="health-sport-item-img"/>
      <p className="label">{ props.label }</p>
    </div>
  );
};

export default HealthSportList;
