import React, { FC, ReactNode } from "react";
import "./index.less";
import { iconPic } from "../../config/image";
import { WingBlank } from "antd-mobile";
import { useHistory } from "react-router";
import MyTitle from "../my-title";

type MyMoreProps = {
  children: string | ReactNode;
  path: string | Function;
  rightContent?: string | ReactNode;
};
const MyMore: FC<MyMoreProps> = (props: MyMoreProps) => {
  const { push } = useHistory();
  return (
    <div className="my-more">
      <WingBlank>
        <header
          onClick={() => {
            return typeof props.path === "function"
              ? props.path()
              : push(props.path);
          }}
        >
          <MyTitle>{props.children}</MyTitle>
          <p>{props.rightContent || "更多"}</p>
          <img src={iconPic.more} alt="" />
        </header>
      </WingBlank>
    </div>
  );
};

export default MyMore;
