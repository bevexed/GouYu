import React, { FC, useEffect } from "react";
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

type Props = {
  open: boolean;
  close(): void;
};
const Specification: FC<Props> = (props: Props) => {
  useEffect(() => {
    preventScroll(".wrap");
    return () => props.close();
  },[]);
  return props.open ? (
    <div className={`wrap`}>
      <div className="specification">
        <MyIcon
          className={"icon"}
          src={iconPic._close}
          onTouchEnd={props.close}
        />
        <header>
          <MyImage src={""} className={"shop-img"} />
          <div className="right">
            <Price>￥189</Price>
            <GrayLabel>库存2920</GrayLabel>
            <MyTitle>清苷朝鲜蓟枳椇子植物饮料</MyTitle>
            <GrayLabel ellipsis={true}>
              护肝养胃，活力十足，清苷朝鲜蓟枳椇…
            </GrayLabel>
          </div>
        </header>

        <WhiteSpace size={"lg"} />

        <section>
          <GrayLabel>颜色</GrayLabel>
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
          <GrayLabel>尺码</GrayLabel>
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
          <GoToShopButton>立即购买</GoToShopButton>
        </footer>
      </div>
    </div>
  ) : null;
};

export default Specification;
