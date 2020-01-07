import React, { FC, useEffect, useState } from "react";
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
  console.log(OrdinaryGoodsSkuList);
  useEffect(() => {
    ajax({
      url: "/goods/getOrdinaryGoodsSkuList",
      method: "GET",
      data: { goodsId: id }
    }).then(res => setOrdinaryGoodsSkuList(res.data));
    preventScroll(".wrap");
    return () => props.close();
  }, [id]);

  const submit = async () => {
    dispatch(
      updateBuyNow({
        goodsId: "1",
        buyQuantity: "1",
        skuId: "1"
      })
    );
    push("/shop/fill-in-order-page");
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
            src={OrdinaryGoodsSkuList[0]?.skuImage}
            className={"shop-img"}
          />
          <div className="right">
            <Price>￥{OrdinaryGoodsSkuList[0]?.salePrice}</Price>
            <GrayLabel>库存2{OrdinaryGoodsSkuList[0]?.skuStock}</GrayLabel>
            <MyTitle>清苷朝鲜蓟枳椇子植物饮料</MyTitle>
            <GrayLabel ellipsis={true}>
              护肝养胃，活力十足，清苷朝鲜蓟枳椇…
            </GrayLabel>
          </div>
        </header>

        <WhiteSpace size={"lg"} />

        <section>
          <GrayLabel>1</GrayLabel>
          <div className="select-list">
            {[1, 2, 3, 4].map((item, key) => (
              <MySelectTag
                key={key}
                onTouchEnd={() => {}}
                isSelected={true}
                children={item}
              />
            ))}
          </div>
        </section>

        <section>
          <GrayLabel>2</GrayLabel>
          <div className="select-list">
            {[1, 2, 3, 4].map((item, key) => (
              <MySelectTag
                key={key}
                onTouchEnd={() => {}}
                isSelected={true}
                children={item}
              />
            ))}
          </div>
        </section>

        <section className={"num"}>
          <GrayLabel>数量</GrayLabel>
          <MyStepper val={1} onChange={() => {}} />
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
