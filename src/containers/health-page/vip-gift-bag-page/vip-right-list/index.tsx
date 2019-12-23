import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../../components/my-image';
import FreeIcon from './image/ico_free_d@2x.png'
import VipIcon from './image/ico_vip_d@2x.png'
import ExperienceIcon from './image/ico_experience_d@2x.png'
import ShareIcon from './image/ico_share_d@2x.png'

type Props = {};

const vipRightList: VipRightItemProps[] = [
  { label: '免费抽现金红包', imgUrl: FreeIcon, disc: '不定期免费抽取现金红包' },
  { label: '专属会员价', imgUrl: VipIcon, disc: '会员享受专属底价' },
  { label: '网红体验', imgUrl: ExperienceIcon, disc: '免费领取网红产品一次' },
  { label: '分享赚钱', imgUrl: ShareIcon, disc: '创建属于自己的团队，享受平台奖励' },
];

const VipRightList: FC<Props> = (props: Props) => {
  return (
    <div className="_vip-right-list">
      { vipRightList.map((item, key) => (
        <VipRightItem { ...item } key={ key }/>
      )) }
    </div>
  );
};

interface VipRightItemProps {
  label: string;
  imgUrl: string;
  disc: string;
}

const VipRightItem: FC<VipRightItemProps> = props => (
  <div className="_vip-right-item">
    <MyImage src={ props.imgUrl } className='_vip-right-item-icon'/>
    <div className="right">
      <p className="label"> { props.label }</p>
      <p className="dis">{ props.disc }</p>
    </div>
  </div>
);

export default VipRightList;
