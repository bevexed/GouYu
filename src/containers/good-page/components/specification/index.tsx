import React, { FC, useMemo, useState } from "react";
import "./index.less";
import { MyImage } from "../../../../components/my-image";
import { GrayLabel, Price } from "../../../../components/price";
import MyTitle from "../../../../components/my-title";
import { WhiteSpace } from "antd-mobile";
import { MySelectTag } from "../../../../components/my-tag";
import MyStepper from "../../../../components/my-stepper";
import { GoToShopButton } from "../../../../components/my-button";
import { preventScroll } from "../../../../util/scroll";
import MyIcon from "../../../../components/my-icon";
import { iconPic } from "../../../../config/image";
import { ajax } from "../../../../api/ajax";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { updateBuyNow } from "../../../../redux/buy-now/actions";

type Props = {
  open: boolean;
  close(): void;
  id?: string;
};
const Specification: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { id } = useParams();
  const [OrdinaryGoodsSkuList, setOrdinaryGoodsSkuList] = useState<any>([]);
  const [Labels, setLabels] = useState<label[]>([]);
  const [oneValues, setOneValues] = useState<number[]>([0, 0]);
  const [twoValues, setTwoValues] = useState<number[]>([0, 0]);
  const [currentSelect, setCurrentSelect] = useState<any>('');
  const [buyQuantity, setBuyQuantity] = useState(1);
  useMemo(() => {
    ajax<any>({
      url: "/goods/getOrdinaryGoodsSkuList",
      method: "GET",
      data: { goodsId: id }
    }).then(res => {
      setOrdinaryGoodsSkuList(res.data);
      const arr = res.data[0];
      const Labels: label[] = [
        {
          name: arr?.oneAttributeName,
          value: []
        },
        {
          name: arr?.twoAttributeName,
          value: []
        }
      ];
      res.data.forEach((item: any) => {
        Labels.forEach((label: any) => {
          console.log(label.value, item);
          if (label.name === item.oneAttributeName) {
            label.value.push(item.oneAttributeValue);
          } else {
            label.value.push(item.twoAttributeValue);
          }
          // @ts-ignore
          label.value = [...new Set(label.value)];
        });
      });
      setLabels(Labels);
      setCurrentSelect(res.data[0])
    });

    preventScroll(".wrap");
    return () => {
      props.close();
    };
  }, ['']);

  useMemo(() => {}, [OrdinaryGoodsSkuList]);

  const submit = async () => {
    dispatch(
      updateBuyNow({
        buyQuantity,
        skuId: currentSelect.id,
        ...currentSelect
      })
    );
    push("/shop/fill-in-order-page");
  };

  const changeLabel = ([key, value]: number[]) => {
    if (key === 0) {
      setOneValues([key, value]);
      OrdinaryGoodsSkuList.forEach((item: any) => {
        if (
          // @ts-ignore
        item.oneAttributeValue === Labels[0].value[value] &&
          // @ts-ignore
          item.twoAttributeValue === Labels[1].value[[twoValues[1]]]
        ) {
          setCurrentSelect(item);
        }
      });
    } else {
      setTwoValues([key, value]);
      OrdinaryGoodsSkuList.forEach((item: any) => {
        if (
          // @ts-ignore
        item?.oneAttributeValue === Labels[0].value[oneValues[1]] &&
          // @ts-ignore
          item.twoAttributeValue === Labels[1].value[value]
        ) {
          setCurrentSelect(item);
        }
      });
    }
  };

  return props.open ? (
    <div className={`wrap`}>
      <div className="specification">
        <MyIcon
          className={"icon"}
          src={iconPic._close}
          onTouchEnd={props.close}
        />
        <header>
          <MyImage
            src={currentSelect.skuImage}
            className={"shop-img"}
          />
          <div className="right">
            <Price>￥{currentSelect.salePrice}</Price>
            <GrayLabel>库存{currentSelect.skuStock}</GrayLabel>
            <MyTitle>清苷朝鲜蓟枳椇子植物饮料</MyTitle>
            <GrayLabel ellipsis={true}>
              护肝养胃，活力十足，清苷朝鲜蓟枳椇…
            </GrayLabel>
          </div>
        </header>

        <WhiteSpace size={"lg"} />

        {Labels.map((item: any, key: number) => (
          <section key={key}>
            <GrayLabel>{item.name}</GrayLabel>
            <div className="select-list">
              {item.value.map((label: any, index: number) => (
                <MySelectTag
                  key={index}
                  onTouchEnd={() => changeLabel([key, index])}
                  isSelected={
                    (key === 0 && oneValues[1] === index) ||
                    (key === 1 && twoValues[1] === index)
                  }
                  children={label}
                />
              ))}
            </div>
          </section>
        ))}

        <section className={"num"}>
          <GrayLabel>数量</GrayLabel>
          <MyStepper val={buyQuantity} onChange={val => setBuyQuantity(val)} />
        </section>

        <footer>
          <GoToShopButton>加入购物车</GoToShopButton>
          <GoToShopButton onTouchEnd={submit}>立即购买</GoToShopButton>
        </footer>
      </div>
    </div>
  ) : null;
};

export default Specification;
interface label {
  name?: any;
  value?: any[];
}
