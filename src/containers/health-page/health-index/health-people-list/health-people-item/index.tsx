import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../../../components/my-image';
import MyIcon from '../../../../../components/my-icon';
import IconLike from './image/icon_like.png';
import IconDisLike from './image/ico_dont_like.png';

type Props = {
  isLike: boolean;
};
const HealthPeopleItem: FC<Props> = (props: Props) => {
  return (
    <div className="health-people-item">
      <MyImage
        className="health-people-item-img"
        src={
          'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2090204863/O1CN01kPS2mj1lnId1eEgyD_!!0-item_pic.jpg_250x250.jpg_.webp'
        }
      />
      <section className="dis">
        无经验健身新手小白四周运动计划分享，适合女生
      </section>
      <footer className="health-people-item-footer">
        <MyImage
          className="health-people-item-footer-img"
          src={
            'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2090204863/O1CN01kPS2mj1lnId1eEgyD_!!0-item_pic.jpg_250x250.jpg_.webp'
          }
        />
        <p>毒岛百合子</p>

        <section>
          <MyIcon
            src={ props.isLike ? IconLike : IconDisLike }
            onTouchEnd={ () => {
            } }
          />{ ' ' }
          1.1万
        </section>
      </footer>
    </div>
  );
};

export default HealthPeopleItem;
