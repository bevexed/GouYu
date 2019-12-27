import React, { FC } from 'react';
import './index.less';
import { MyNavBar } from '../../../../components/my-nav-bar';
import MyList from '../../../../components/my-list';
import MyItem, { MySelectItem } from '../../../../components/my-item';
import MyInput from '../../../../components/my-input';
import { MyBottomButton } from '../../../../components/my-button';
import MyCheckBox from '../../../../components/my-check-box';

type Props = {};
const AddConsigneePage: FC<Props> = (props: Props) => {
  return (
    <div className="add-consignee-page">
      <MyNavBar>新增收货人</MyNavBar>
      <MyList>
        <MyItem label={ '姓名' }>
          <MyInput placeholder={ '请输入姓名' }/>
        </MyItem>
        <MyItem label={ '手机号码' }>
          <MyInput placeholder={ '请输入手机号码' }/>
        </MyItem>
        <MyItem label={ '邮政编码' }>
          <MyInput placeholder={ '请输入邮政编码' }/>
        </MyItem>
        <MyItem label={ '所在区域' } arrow>
          <MyInput placeholder={ '请输入说在区域' } disabled/>
        </MyItem>
        <MyItem label={ '详细地址' }>
          <MyInput placeholder={ '请输入详细地址' }/>
        </MyItem>
      </MyList>
      <MySelectItem
        checkBox={ <MyCheckBox onChange={ () => {
        } }/> }
        disc={ '设为默认收货地址' }
      />

      <MyBottomButton>保存</MyBottomButton>
    </div>
  );
};

export default AddConsigneePage;
