import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import MyAddressItem from '../../../my-page/components/my-address-item';
import MyCheckBox from '../../../../components/my-check-box';
import { WingBlank } from 'antd-mobile';
import { MyBlueTag } from '../../../../components/my-tag';
import { iconPic } from '../../../../config/image';
import { useHistory } from 'react-router';
import { MyImage } from '../../../../components/my-image';
import { GrayLabel } from '../../../../components/price';
import MyWhiteBlank from '../../../../components/my-white-blank';
import { MyBottomButton } from '../../../../components/my-button';

type Props = {};
const Index: FC<Props> = (props: Props) => {
  const { push } = useHistory();
  return (
    <div className="_select-consignee-page">
      <MyNavBar>选择收货人</MyNavBar>

      { new Array(10).fill(1).map((item, key) => (
        <div key={ key }>
          <WingBlank>
            <MyAddressItem
              name={ '王涛' }
              phone={ '132****5121' }
              phoneAfter={
                <>
                  <MyImage src={ iconPic.edit } className="edit-icon"/>
                  <GrayLabel>编辑</GrayLabel>
                </>
              }
              addressContent={
                <>
                  <MyBlueTag>默认</MyBlueTag>
                  <span> 浙江省杭州市西湖区剑桥公社E座B02</span>
                </>
              }
              onTouchEnd={ () => push('/shop/shop-car/select-consignee-page') }
              rightContent={ <MyCheckBox onChange={ () => {
              } }/> }
            />
          </WingBlank>

          <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

        </div>
      )) }

      <MyBottomButton>添加新收获人</MyBottomButton>

    </div>
  );
};

export default Index;
