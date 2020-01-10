import React, { FC, ReactNode } from "react";
import { NavBar } from "antd-mobile";
import "./index.less";
import { MyImage } from "../my-image";
import { iconPic } from "../../config/image";
import { useHistory } from "react-router";
import { AppGetBack, isApp } from "../../util/dsbridge";

interface Prop {
  children?: string | HTMLElement;
  rightContent?: ReactNode;
  appBack?: boolean;
}

export const MyNavBar: FC<Prop> = (prop: Prop) => {
  const { length, goBack } = useHistory();
  const back = () => {
    (prop.appBack && isApp())?
      AppGetBack():
      goBack();
  };
  return (
    <div className="my-nav-bar">
      <NavBar
        mode={"light"}
        rightContent={prop.rightContent}
        icon={
          length && (
            <MyImage
              className="nav-bar-ico"
              src={iconPic.backBlack}
              onTouchEnd={back}
            />
          )
        }
      >
        <span className="nav-bar-title">{prop.children}</span>
      </NavBar>
    </div>
  );
};
