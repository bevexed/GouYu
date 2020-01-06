import React, { FC, ReactNode, useState } from "react";
import "./index.less";
import { iconPic } from "../../../../config/image";
import { Tabs } from "antd-mobile";
import MyTag from "../../../../components/my-tag";
import { MyBuyButton } from "../../../../components/my-button";

enum State {
  "未开始",
  "进行中",
  "已结束",
  "已抢完"
}

type TabProps = {
  title: ReactNode;
  state: number;
  index: number;
  page?: number;
};

type SeckillProps = {
  tabs: any[];
  children: ReactNode;
  getChange?: (index: any) => void;
};
const Seckill: FC<SeckillProps> = (props: SeckillProps) => {
  const [page, setPage] = useState(0);
  const _tabs = props.tabs.map(
    ({ name, status,...rest }, index) => ({
      title: name,
      state: status,
      index,
      ...rest
    })
  );
  return (
    <div className="seckill">
      <Tabs
        tabs={_tabs as any}
        initialPage={page}
        page={page}
        onChange={(tab, index) => {
          setPage(index);
          props.getChange &&
            props.getChange(
             tab
            );
        }}
        tabBarBackgroundColor={"#F8F9FA"}
        tabBarActiveTextColor={"#262D2C"}
        tabBarInactiveTextColor={"#747978"}
        tabBarUnderlineStyle={{ display: "none" }}
        renderTab={(props: any) => <RenderTab {...props} page={page} />}
      >
        {props.children}
      </Tabs>
    </div>
  );
};

export const RenderTab: FC<TabProps> = (tab: TabProps) => {
  return (
    <div className={["tab-item", tab.index === tab.page && "active"].join(" ")}>
      <span className={"first"}>{tab.title}</span> <br />
      <span className={"second"}>{State[tab.state]}</span>
    </div>
  );
};

export const RenderContent: FC<{}> = tab => {
  return (
    <div className="tab-content">
      <header>
        <img
          src={
            "https://img.alicdn.com/simba/img/TB1Jf8bq8v0gK0jSZKbSuvK2FXa.jpg"
          }
          alt=""
        />
      </header>
      <h1>清苷朝鲜蓟枳椇子植物饮料</h1>
      <p>
        护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物护肝养胃，活力十足，清苷朝鲜蓟枳椇子植物饮料，植物…
      </p>
      <section className={"price"}>
        <span className="ori">￥49</span>
        <span className="del">￥39</span>
        <img src={iconPic.vip} alt="" /> <span className="vip">￥29</span>
        <span className="sold">已售563件</span>
      </section>
      <footer>
        <MyTag>VIP省 ￥5.99</MyTag>
        <MyTag>分享赚 ￥5.99</MyTag>
        <MyBuyButton state={"soldOut"} onTouchEnd={() => {}} />
      </footer>
    </div>
  );
};

export default Seckill;
