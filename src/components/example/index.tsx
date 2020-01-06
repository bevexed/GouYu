import React, { FC, useState } from "react";
import "./index.less";
import MyTitle from "../my-title";
import { Flex, WhiteSpace, WingBlank } from "antd-mobile";
import { GoToShopButton, LotteryButton, MyBottomButton, MyButton, MyBuyButton, MyNormalButton } from "../my-button";
import MyCheckBox from "../my-check-box";
import MyIcon from "../my-icon";
import { iconPic } from "../../config/image";
import MyInput from "../my-input";
import MyItem, { MySelectItem } from "../my-item";
import MyMore from "../my-more";
import MyPopUp from "../my-pop-up";
import MySearchBar from "../my-search-bar";
import MySharePopUp from "../my-share-pop-up";
import MyStepper from "../my-stepper";
import { GoodStateBar } from "../my-tabs";
import MyTag, { MyBlueTag, MyBorderTag, MyGrayTag, MySelectTag, MySmallGrayTag, MySmallYellowTag } from "../my-tag";
import { BlackLabel, GrayLabel, OriginPrice, Price, VipPrice } from "../price";

type Props = {};
const ExamplePage: FC<Props> = (props: Props) => {
  let [popState, setPopState] = useState(false);
  const [sharePop, setSharePop] = useState(false);
  return (
    <div className="_example">
      <h1>UI</h1>
      <WingBlank>
        <MyTitle>GoodStateBar</MyTitle>
      </WingBlank>
      <GoodStateBar getListState={ () => {
      } }/>

      <WingBlank>
        <MyTitle>MySearchBar</MyTitle>
      </WingBlank>
      <MySearchBar placeholder={ "外层不要包裹其他元素" }/>

      <WingBlank>
        <MyTitle>Tag</MyTitle>
        <Flex wrap={ "wrap" } justify={ "around" }>
          <MyTag>MyTag</MyTag>

          <MyBorderTag>MyBorderTag</MyBorderTag>

          <MyGrayTag>MyGrayTag</MyGrayTag>

          <MySmallGrayTag>MSGT</MySmallGrayTag>

          <MySmallYellowTag>MySmallYellowTag</MySmallYellowTag>

          <MyBlueTag>MyBlueTag</MyBlueTag>

          <MySelectTag isSelected onTouchEnd={ () => {
          } }>MySelectTag</MySelectTag>
        </Flex>
      </WingBlank>

      <WingBlank>
        <MyTitle>Price</MyTitle>
        <Flex justify={"between"}>
          <Price>Price</Price>

          <OriginPrice>OriginPrice</OriginPrice>

          <VipPrice>VipPrice</VipPrice>

          <GrayLabel>GrayLabel</GrayLabel>

          <BlackLabel>BlackLabel</BlackLabel>
        </Flex>
      </WingBlank>

      <WingBlank>
        <MyTitle>MyButton</MyTitle>
        <MyButton>按钮</MyButton>

        <MyTitle>MyBuyButton state={ "soldOut" }</MyTitle>
        <MyBuyButton state={ "soldOut" }/>
        <MyTitle>MyBuyButton state={ "buy" }</MyTitle>
        <MyBuyButton state={ "buy" }/>
        <MyTitle>MyBuyButton state={ "free" }</MyTitle>
        <MyBuyButton state={ "free" }/>
        <MyTitle>MyBuyButton state={ "buyToVip" }</MyTitle>
        <MyBuyButton state={ "buyToVip" }/>

        <MyTitle>GoToShopButton</MyTitle>
        <GoToShopButton>GoToShopButton</GoToShopButton>

        <MyTitle>LotteryButton</MyTitle>
        <LotteryButton>LotteryButton</LotteryButton>
        <MyTitle>MyNormalButton</MyTitle>
        <MyNormalButton>MyNormalButton</MyNormalButton>

        <MyTitle>MyCheckBox</MyTitle>
        <Flex>
          <MyCheckBox onChange={ () => {
          } }/>
          <WhiteSpace/>
          <MyCheckBox onChange={ () => {
          } } value={ true }/>
        </Flex>

        <MyTitle>MyIcon( src='{ "iconPic.[xxx]" }' )</MyTitle>
        <MyIcon src={ iconPic.backBlack }/>

        <MyTitle>MyInput</MyTitle>
        <MyInput/>

        <MyTitle>MyItem</MyTitle>
        <MyItem
          label={ "123" }
          right={ "123" }
          icon={ "icon" }
          arrow={ true }
          children={ "123" }
        />

        <MyTitle>MySelectItem</MyTitle>
        <MySelectItem checkBox={ 123 } disc={ "123" }/>

        <MyTitle>MyMore</MyTitle>
        <MyMore path={ "123" } children={ "123" }/>

        <MyTitle>MyStepper</MyTitle>
        <MyStepper val={ 1 } onChange={ () => {
        } }/>

        <MyTitle>
          <span onTouchEnd={ () => setPopState(true) }>MyPopUp(点击)</span>
        </MyTitle>

        <MyTitle>
          <span onTouchEnd={ () => setSharePop(true) }>MySharePopUp(点击)</span>
        </MyTitle>
      </WingBlank>
      <MyBottomButton>BottomButton(外层不要包裹其他元素)</MyBottomButton>

      <MySharePopUp
        popUpShow={ sharePop }
        setPopUpShow={ () => setSharePop(false) }
      />
      <MyPopUp popUpShow={ popState } setPopUpShow={ () => setPopState(false) }>
        123
      </MyPopUp>
    </div>
  );
};

export default ExamplePage;
