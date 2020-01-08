import React, { FC, useState } from "react";
import "./index.less";
import { MyNavBar } from "../../../../components/my-nav-bar";
import MyList from "../../../../components/my-list";
import MyItem, { MySelectItem } from "../../../../components/my-item";
import MyInput from "../../../../components/my-input";
import { MyBottomButton } from "../../../../components/my-button";
import MyCheckBox from "../../../../components/my-check-box";
import { AjaxUserAddressSave } from "../../../../api/address";
import { Picker, Toast } from "antd-mobile";
import { addressList } from "../../../../static/location/location";
import arrayTreeFilter from "array-tree-filter";
import { useHistory } from "react-router";

type Props = {};
const AddConsigneePage: FC<Props> = (props: Props) => {
  const [pickerValue, setPickerValue] = useState<any[]>([]);
  const { go } = useHistory();
  const getSel = (): any[] => {
    const value = pickerValue;
    if (!value) {
      return ["杭州市", "", ""];
    }
    const treeChildren = arrayTreeFilter(
      addressList,
      (c, level) => c.value === value[level]
    );
    return treeChildren.map(v => v.label);
  };

  const [data, setData] = useState<any>({
    name: "",
    phone: "",
    postalCode: "",
    province: getSel()[0],
    city: getSel()[1],
    region: getSel()[2],
    address: "",
    isDefault: 1
  });
  const address = () => {
    let i = 0
    Object.entries(data).forEach(([key, value]) => {
      if (!value) {
        return Toast.fail("请填写" + key);
      }
      ++i;
    });

    AjaxUserAddressSave(data).then(res => {
      if (res.status === 0) {
        Toast.success(res.message, 3, () => {
          go(-1);
        });
      } else {
        Toast.fail(res.message);
      }
    });
  };
  // @ts-ignore
  // @ts-ignore
  return (
    <div className="add-consignee-page">
      <MyNavBar>新增收货人</MyNavBar>
      <MyList>
        <MyItem label={"姓名"}>
          <MyInput
            placeholder={"请输入姓名"}
            onInput={e => setData({ ...data, name: e.currentTarget.value })}
          />
        </MyItem>
        <MyItem label={"手机号码"}>
          <MyInput
            type={"tel"}
            placeholder={"请输入手机号码"}
            onInput={e => setData({ ...data, phone: e.currentTarget.value })}
          />
        </MyItem>
        <MyItem label={"邮政编码"}>
          <MyInput
            type={"number"}
            placeholder={"请输入邮政编码"}
            onInput={e =>
              setData({ ...data, postalCode: e.currentTarget.value })
            }
          />
        </MyItem>
        <MyItem label={"选择地址"} arrow={true}>
          <Picker
            title="选择地区"
            extra="请选择(可选)"
            data={addressList}
            value={pickerValue}
            onChange={v => setPickerValue(v as any[])}
            onOk={v => setPickerValue(v)}
            cols={3}
          >
            <div style={{ width: "100%", height: "100%" }}>
              {getSel().join(" ") || "请选择地址"}
            </div>
          </Picker>
        </MyItem>
        <MyItem label={"详细地址"}>
          <MyInput
            placeholder={"请输入详细地址"}
            onInput={e => setData({ ...data, address: e.currentTarget.value })}
          />
        </MyItem>
      </MyList>

      <MySelectItem
        checkBox={
          <MyCheckBox
            value={data.isDefault === 1}
            onChange={() =>
              setData({ ...data, isDefault: data.isisDefault === 1 ? 0 : 1 })
            }
          />
        }
        disc={"设为默认收货地址"}
      />

      <MyBottomButton onTouchEnd={address}>保存</MyBottomButton>
    </div>
  );
};

export default AddConsigneePage;
